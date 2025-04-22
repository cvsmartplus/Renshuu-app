<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();

        return Inertia::render('Course', [
            'courses' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $course = Course::where('slug', $slug)->first();

        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        $relatedCourses = Course::where('id', '!=', $course->id)
            ->take(3)
            ->get(['id', 'slug', 'title', 'student' , 'description', 'price', 'image']);

        return Inertia::render('Course/SingleCourse', [
            'course' => [
                'id' => $course->id,
                'title' => $course->title,
                'content' => $course->content,
                'slug' => $course->slug,
                'description' => $course->description,
                'price' => $course->price,
                'discount' => $course->discount,
                'trainers_name' => $course->trainers_name,
                'level' => $course->level,
                'duration' => $course->duration,
                'student' => $course->student,
                'image' => $course->image,
            ],
            'relatedCourses' => $relatedCourses->map(function ($related) {
                return [
                    'id' => $related->id,
                    'title' => $related->title,
                    'slug' => $related->slug,
                    'description' => $related->description,
                    'student' => $related->student,
                    'price' => $related->price,
                    'image' => $related->image,
                ];
            })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
