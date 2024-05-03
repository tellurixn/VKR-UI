function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const screen = document.getElementById('screen');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        screen.style.display = 'block';
    } else {
        sidebar.style.left = '0px';
        screen.style.display = 'none';
    }
}
