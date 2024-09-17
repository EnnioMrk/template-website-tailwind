tailwind.config = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            'heavy': ['Cooper Hewitt Heavy', 'sans-serif'],
            'medium': ['Cooper Hewitt Medium', 'sans-serif'],
            'light': ['Cooper Hewitt Light', 'sans-serif'],
            'text': ['Cooper Hewitt Text', 'sans-serif'],
        },
    },
};

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
    document.getElementById('toggleTheme').click();
} else {
    document.documentElement.classList.remove('dark');
}

document.getElementById('toggleTheme').addEventListener('click', function () {
    //localStorage.removeItem('theme');
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    }
});
