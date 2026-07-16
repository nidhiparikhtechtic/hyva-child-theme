document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    if (!body.classList.contains('account')) return;

    const sidebar = document.querySelector('.sidebar.sidebar-main');
    if (!sidebar) return;

    sidebar.classList.add(
        'sm:border-r',
        'border-teakea-light-gray',
        'sm:sticky',
        'sm:top-6',
        'sm:h-screen'
    );
});