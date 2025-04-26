export function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffSeconds < 60) {
        return `${diffSeconds} detik yang lalu`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} menit yang lalu`;
    } else if (diffHours < 24) {
        return `${diffHours} jam yang lalu`;
    } else if (diffDays < 7) {
        return `${diffDays} hari yang lalu`;
    } else if (diffWeeks < 5) {
        return `${diffWeeks} minggu yang lalu`;
    } else if (diffMonths < 12) {
        return `${diffMonths} bulan yang lalu`;
    } else {
        return `${diffYears} tahun yang lalu`;
    }
}
