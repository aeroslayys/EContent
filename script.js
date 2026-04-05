// --- DATA SOURCE ---
const projects = [
    { 
    roll: "22384108, 21384109", 
    name: "Gokul and Ealaf Shirin", 
    topic: "SJF Scheduling", 
    type: "PPT", 
    links: [
        { label: "Launch Project", url: "https://gokul-gopakumar.github.io/SJF-GAME/" },
        { label: "View Slides", url: "https://docs.google.com/presentation/d/1CEDUjWmYIKoJ4e9UPwqTECbzlPeNJwS5/edit?usp=drivesdk&ouid=113957796881675973104&rtpof=true&sd=true" }
    ] 
},
    { 
        roll: "22384126", 
        name: "Viswapriya R", 
        topic: "Security Features in OS", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://priya14765.github.io/Security-Features/" }] 
    },
    { 
        roll: "22384105", 
        name: "Balaji", 
        topic: "Restaurant Order Sceheduler", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://balabm.github.io/Restaurantt3st/" }] 
    },
    { 
        roll: "22384125, 22384112", 
        name: "Vishnupriya SV and Leeladevi M", 
        topic: "Modern Operating Systems", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://leela-29.github.io/Nexus-OS/" }] 
    },
    { 
        roll: "22384107,22384104", 
        name: "Fuad PP and Athul Krishnan", 
        topic: "Deadlock & Banker's Algorithm", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://fuad1817.github.io/Understanding-Deadlock/" }] 
    },
    { 
        roll: "22384123, 22384110", 
        name: "Suba P and Indhumathi R", 
        topic: "Round Robin CPU scheduling", 
        type: "Websites", 
        links: [
            //{ label: "Watch Video", url: "https://youtube.com/watch?v=BdTvhPQxVUw&feature=shared" },
            { label: "Launch Website", url: "https://greyyy123.github.io/round-robin/" }
        ] 
    },
    { 
        roll: "22384115, 22384120", 
        name: "Shreya and Rifath", 
        topic: "Page Replacement", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://rifacspu2004.github.io/os_project/" }] 
    },
    { 
        roll: "22384117, 22384109", 
        name: "Naresh and Harish", 
        topic: "Shortest Job First Scheduling", 
        type: "video", 
        links: [
            { label: "Watch Video", url: "https://youtu.be/S8Bhs0wP0l8?si=9l5M2urVQmaN_aJJ" },
            { label: "Launch Website", url: "https://cpu-scheduling-app.vercel.app/" }
        ] 
    },
    { 
        roll: "21384130", 
        name: "Vidhyshree S", 
        topic: "Multitasking and Multithreading", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://priya14765.github.io/Multitasking-and-Multithreading/" }] 
    },
    { 
        roll: "22384106, 22384101", 
        name: "Boda Kaveri and Arthi", 
        topic: "Disk Scheduling Algorithms", 
        type: "Websites", 
        links: [{ label: "Launch Project", url: "https://bodakaveri8.blogspot.com/" }] 
    },
    { 
        roll: "22384116, 22384124", 
        name: "Mohan Raju and Chandu T", 
        topic: "System and OS Structure", 
        type: "video", 
        links: [
            //{ label: "Watch Video", url: "https://youtube.com/watch?v=BdTvhPQxVUw&feature=shared" },
            { label: "Launch Video", url: "https://youtu.be/qRCoNyUZgOI" }
        ] 
    },
];
// --- THEME CONFIG (reads CSS variables so light/dark mode is automatic) ---
const typeConfig = {
    video: {
        gradA: '#3b82f6', gradB: '#06b6d4',
        glowColor: 'rgba(59,130,246,0.45)',
        badgeClass: 'badge-video',
        label: 'Video'
    },
    audio: {
        gradA: '#a855f7', gradB: '#ec4899',
        glowColor: 'rgba(168,85,247,0.45)',
        badgeClass: 'badge-audio',
        label: 'Audio'
    },
    Websites: {
        gradA: '#10b981', gradB: '#14b8a6',
        glowColor: 'rgba(16,185,129,0.45)',
        badgeClass: 'badge-web',
        label: 'Website'
    },
    PPT: {
        gradA: '#f97316', gradB: '#eab308',
        glowColor: 'rgba(249,115,22,0.45)',
        badgeClass: 'badge-ppt',
        label: 'PPT'
    }
};
 
function getConfig(type) {
    return typeConfig[type] || {
        gradA: '#60a5fa', gradB: '#818cf8',
        glowColor: 'rgba(96,165,250,0.3)',
        badgeClass: 'badge-video',
        label: type
    };
}
 
// --- STATE ---
let currentFilter = 'all';
const grid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const resultsCount = document.getElementById('resultsCount');
 
// --- THEME TOGGLE ---
let isDark = true;
const sunSVG = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const moonSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
 
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? '' : 'light');
    document.getElementById('themeIcon').innerHTML = isDark ? sunSVG : moonSVG;
    document.getElementById('themeBtnLabel').textContent = isDark ? 'Light mode' : 'Dark mode';
}
 
// --- FILTER CHIPS ---
function setFilter(btn) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.type;
    performFilter();
}
 
// --- SORT ---
function getSorted(data) {
    const sort = document.getElementById('sortSelect').value;
    const copy = [...data];
    if (sort === 'az') copy.sort((a, b) => a.topic.localeCompare(b.topic));
    if (sort === 'za') copy.sort((a, b) => b.topic.localeCompare(a.topic));
    if (sort === 'type') copy.sort((a, b) => a.type.localeCompare(b.type));
    return copy;
}
 
// --- RENDER ---
function renderCards(data) {
    if (data.length === 0) {
        grid.innerHTML = `<div class="empty-state col-span-full"><p>No matching projects found...</p></div>`;
        resultsCount.textContent = '0 results';
        return;
    }
 
    resultsCount.textContent = `${data.length} result${data.length !== 1 ? 's' : ''}`;
 
    grid.innerHTML = data.map((item, idx) => {
        const cfg = getConfig(item.type);
 
        const buttonsHTML = item.links.map(link => `
            <a href="${link.url}" target="_blank" class="card-btn">
                ${link.label}
                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;flex-shrink:0;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        `).join('');
 
        return `
            <div class="group relative rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-2 card-fade-in"
                 style="
                   animation-delay: ${idx * 0.06}s;
                   background: linear-gradient(135deg, ${cfg.gradA}, ${cfg.gradB});
                 "
                 onmouseover="this.style.boxShadow='0 0 36px ${cfg.glowColor}'"
                 onmouseout="this.style.boxShadow='none'">
 
                <div style="
                  background: var(--bg-card);
                  border-radius: calc(1.5rem - 1.5px);
                  padding: 1.75rem;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  transition: background 0.3s;
                ">
 
                    <!-- Header row -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 1.25rem;">
                        <span style="
                          font-size: 10px;
                          font-weight: 800;
                          letter-spacing: 0.16em;
                          text-transform: uppercase;
                          background: var(--badge-${item.type === 'Websites' ? 'web' : item.type === 'PPT' ? 'ppt' : item.type === 'audio' ? 'audio' : 'video'}-bg);
                          color: var(--badge-${item.type === 'Websites' ? 'web' : item.type === 'PPT' ? 'ppt' : item.type === 'audio' ? 'audio' : 'video'}-text);
                          border: 1px solid var(--badge-${item.type === 'Websites' ? 'web' : item.type === 'PPT' ? 'ppt' : item.type === 'audio' ? 'audio' : 'video'}-border);
                          padding: 4px 11px;
                          border-radius: 100px;
                          white-space: nowrap;
                          transition: background 0.3s, color 0.3s;
                        ">${cfg.label}</span>
                        <span style="
                          font-size: 11px;
                          font-family: 'DM Mono', monospace;
                          color: var(--text-secondary);
                          text-align: right;
                          line-height: 1.5;
                          word-break: break-all;
                          transition: color 0.3s;
                        ">ID: ${item.roll}</span>
                    </div>
 
                    <!-- Topic -->
                    <h3 style="
                      font-size: 1.35rem;
                      font-weight: 800;
                      letter-spacing: -0.02em;
                      line-height: 1.25;
                      margin-bottom: 0.6rem;
                      background: linear-gradient(135deg, ${cfg.gradA}, ${cfg.gradB});
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      background-clip: text;
                    ">${item.topic}</h3>
 
                    <!-- Name -->
                    <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 1.5rem; transition: color 0.3s;">
                        by <span style="color: var(--text-primary); font-weight: 600; transition: color 0.3s;">${item.name}</span>
                    </p>
 
                    <!-- Buttons -->
                    <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">
                        ${buttonsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
 
// --- FILTER + SORT ---
function performFilter() {
    const query = searchInput.value.toLowerCase().trim();
 
    const filtered = projects.filter(p => {
        const matchesType = currentFilter === 'all' || p.type === currentFilter;
        const matchesSearch = !query ||
            p.topic.toLowerCase().includes(query) ||
            p.roll.toLowerCase().includes(query) ||
            p.name.toLowerCase().includes(query);
        return matchesType && matchesSearch;
    });
 
    renderCards(getSorted(filtered));
}
 
// --- EVENTS ---
searchInput.addEventListener('input', performFilter);
document.getElementById('sortSelect').addEventListener('change', performFilter);
 
// --- INIT ---
renderCards(projects);
resultsCount.textContent = `${projects.length} results`;