document.addEventListener('alpine:init', () => {
    Alpine.store('authModal', {
        open: false,
        tab: 'login',
        scrollY: 0,
        show(tab = 'login') {
            this.tab = tab;
            this.open = true;
            this.scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${this.scrollY}px`;
            document.body.style.width = '100%';
        },
        hide() {
            this.open = false;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, this.scrollY);
        }
    });
});