@extends('admin.layout.layoutAdmin')

@section('title', 'Manajemen Artikel | Admin')


@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title mb-0">Buat Artikel Baru</h6>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.articles.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @error('title')
                    <div class="text-danger">{{ $message }}</div>
                @enderror

                <div class="row gy-3">
                    <div class="col-12">
                        <label class="form-label">Judul Artikel</label>
                        <input type="text" name="title" class="form-control" placeholder="Judul artikel">
                    </div>
                    <div class="col-12">
                        <label class="form-label">Kategori Artikel</label>
                        <select name="category_id" class="form-control">
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-12">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-control">
                            <option value="draft">Draft</option>
                            <option value="published">Publish</option>
                        </select>
                    </div>
                    <div class="col-12 mt-3">
                        <label class="form-label">SEO Title (Opsional)</label>
                        <input type="text" name="seo_title" class="form-control" placeholder="Judul SEO">
                    </div>
                    <div class="col-12 mt-3">
                        <label class="form-label">Meta Description (Opsional)</label>
                        <textarea name="meta_description" class="form-control" rows="3" placeholder="Deskripsi singkat artikel"></textarea>
                    </div>
                </div>
                <label class="mt-3" aria-label="Description">Deskripsi Artikel</label>
                <div id="div_editor1" aria-labelledby="toolbar-container" style="height: 500px">
                </div>

                <input type="hidden" name="content" id="content-input">

                <div class="col-12 mt-4">
                    <label>Upload Thumbnail</label>
                    <input type="file" name="media_path" class="form-control">
                </div>
                <button type="submit" class="btn-brand-950 mt-4">Unggah</button>
            </form>
        </div>
    </div>
@endsection

@push('scripts')
<script>
    var editor1 = new RichTextEditor("#div_editor1", {
        editorResizeMode: "none"
    });
    console.log(editor1.getHTMLCode());
    
    document.querySelector('form').addEventListener('submit', function (e) {
        document.getElementById('content-input').value = editor1.getHTMLCode();
    });
</script>
@endpush
