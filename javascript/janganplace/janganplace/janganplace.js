// Real Data List for Jangan University (장안대학교) & Bongdam University Commercial Area

const placeData = [

    // --- [맛집 - 중식] ---

    {

        id: 101,

        title: "보배반점 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 중식",

        subCategory: "중식",

        rating: 4.8,

        likes: 135,

        dist: "학교 차로 5분",

        badges: ["#중식", "#진한짬뽕", "#탕수육맛집"],

        desc: "불향 가득한 차돌짬뽕과 바삭한 탕수육이 일품인 대학가 필수 중식당.",

        query: "보배반점 봉담점",

        address: "경기 화성시 효행구 봉담읍 장등2길 6-16 1동 1층"

    },

    // --- [맛집 - 떡볶이] ---

    {

        id: 102,

        title: "동대문엽기떡볶이 화성봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 떡볶이",

        rating: 4.7,

        likes: 168,

        dist: "학교 도보 8분",

        badges: ["#떡볶이", "#매운맛성지", "#착한맛도가능"],

        desc: "스트레스 날리기 딱 좋은 매콤함! 친구들과 나눠먹기 최고인 최애 떡볶이.",

        query: "엽기떡볶이 화성봉담점",

        address: "경기 화성시 효행구 봉담읍 동화길 93-14 1층 103호"

    },

    // --- [맛집 - 햄버거] ---

    {

        id: 103,

        title: "왓더버거 화성봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 햄버거",

        rating: 4.8,

        likes: 122,

        dist: "학교 차로 4분",

        badges: ["#햄버거", "#수제버거", "#패티육즙"],

        desc: "신선한 재료와 두툼한 패티가 꽉 찬 신개념 직화 수제버거 전문점.",

        query: "왓더버거 화성봉담점",

        address: "경기 화성시 효행구 봉담읍 동화역말길 25 1층 113호"

    },

    {

        id: 104,

        title: "롯데리아 화성봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 햄버거",

        rating: 4.5,

        likes: 92,

        dist: "학교 도보 6분",

        badges: ["#햄버거", "#불고기버거", "#빠른식사"],

        desc: "공강 시간에 실패 없는 디저트와 패스트푸드를 편하게 즐기는 곳.",

        query: "롯데리아 화성봉담점",

        address: "경기 화성시 효행구 봉담읍 상리2길 55"

    },

    {

        id: 105,

        title: "맘스터치 봉담리치타워점",

        category: "food",

        categoryName: "🍕 맛집 · 햄버거",

        rating: 4.7,

        likes: 145,

        dist: "학교 도보 7분",

        badges: ["#햄버거", "#싸이버거", "#치킨패티"],

        desc: "압도적인 두께의 치킨 패티! 버거와 치킨을 동시에 즐기는 가성비 맛집.",

        query: "맘스터치 봉담리치타워점",

        address: "경기 화성시 효행구 봉담읍 매봉로 441 리치타워 B101호"

    },

    // --- [맛집 - 국밥] ---

    {

        id: 106,

        title: "만복돼지국밥",

        category: "food",

        categoryName: "🍕 맛집 · 국밥",

        rating: 4.9,

        likes: 189,

        dist: "학교 도보 6분",

        badges: ["#국밥", "#진국육수", "#해장추천"],

        desc: "깊고 진한 국물과 푸짐한 고기! 든든한 한 끼와 해장에 제격인 돼지국밥 전문점.",

        query: "만복돼지국밥 봉담",

        address: "경기 화성시 효행구 봉담읍 샘마을길 12 102, 103호"

    },

    // --- [맛집 - 마라탕] ---

    {

        id: 107,

        title: "탕화쿵푸마라탕 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 마라탕",

        rating: 4.8,

        likes: 215,

        dist: "학교 도보 5분",

        badges: ["#마라탕", "#꿔바로우", "#최애마라"],

        desc: "중독성 강한 땅콩소스 국물과 신선한 재료! 장안대생 마라 혈중농도 채우는 곳.",

        query: "탕화쿵푸마라탕 봉담점",

        address: "경기 화성시 효행구 봉담읍 상리2길 55 어반센터프라자 2층 204호"

    },

    // --- [맛집 - 치킨] ---

    {

        id: 108,

        title: "자담치킨 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 치킨",

        rating: 4.7,

        likes: 110,

        dist: "학교 도보 8분",

        badges: ["#치킨", "#맵슐랭", "#웰빙치킨"],

        desc: "무항생제 원육으로 만드는 겉바속촉 웰빙 치킨! 인기 메뉴 맵슐랭 강추.",

        query: "자담치킨 봉담점",

        address: "경기 화성시 효행구 봉담읍 매봉로 478 대호프라자 2층"

    },

    {

        id: 109,

        title: "교촌치킨 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 치킨",

        rating: 4.6,

        likes: 130,

        dist: "학교 도보 5분",

        badges: ["#치킨", "#허니콤보", "#치맥"],

        desc: "단짠단짠의 대명사 허니콤보와 레드콤보! 뒷풀이 및 동아리 모임 추천 스팟.",

        query: "교촌치킨 봉담점",

        address: "경기 화성시 효행구 봉담읍 삼천병마로 1268"

    },

    // --- [맛집 - 고기] ---

    {

        id: 110,

        title: "등불회관 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 고기",

        rating: 4.8,

        likes: 142,

        dist: "학교 도보 6분",

        badges: ["#고기", "#삼겹살", "#회식장소"],

        desc: "육즙 가득한 두툼한 삼겹살과 목살이 맛있는 고깃집! 과 회식 장소로 선호도 높음.",

        query: "등불회관 봉담",

        address: "경기 화성시 효행구 봉담읍 샘마을길 19 1층"

    },

    {

        id: 111,

        title: "와우곱창",

        category: "food",

        categoryName: "🍕 맛집 · 고기",

        rating: 4.9,

        likes: 176,

        dist: "학교 도보 7분",

        badges: ["#고기", "#소곱창", "#볶음밥필수"],

        desc: "고소한 쫄깃함이 일품인 곱창 구이와 막창! 마무리는 무조건 볶음밥으로 완성.",

        query: "와우곱창 봉담",

        address: "경기 화성시 효행구 봉담읍 와우안길 29 1층"

    },

    {

        id: 112,

        title: "홍대장소고기집 봉담점",

        category: "food",

        categoryName: "🍕 맛집 · 고기",

        rating: 4.8,

        likes: 154,

        dist: "학교 도보 6분",

        badges: ["#고기", "#소고기", "#가성비소고기"],

        desc: "부담 없는 가격에 퀄리티 높은 소고기를 배부르게 즐길 수 있는 맛집.",

        query: "홍대장소고기집 봉담점",

        address: "경기 화성시 효행구 봉담읍 샘마을길 17 C동 1층"

    },



    // --- [카페 / 놀거리 / 공강 유지] ---

    {

        id: 2,

        title: "카페 오늘도 오솝 (In The Forest)",

        category: "cafe",

        categoryName: "☕ 카페",

        rating: 4.7,

        likes: 98,

        dist: "학교 도보 15분",

        badges: ["#카공스팟", "#디저트맛집", "#감성뷰"],

        desc: "넓은 좌석과 잔잔한 음악, 콘센트가 잘 갖춰져 있어 공강 시간 과제 및 시험공부에 최적화된 곳.",

        query: "카페 오늘도 오솝",

        address: "경기 화성시 효행구 봉담읍 상리 629-5"

    },

    {

        id: 3,

        title: "봉담 가브리엘 당구장",

        category: "play",

        categoryName: "🎮 놀거리/술집",

        rating: 4.7,

        likes: 124,

        dist: "학교 도보 6분",

        badges: ["#당구장", "#내기당구", "#공강스팟"],

        desc: "쾌적하고 넓은 테이블 라인업으로 친구들과 공강 시간에 내기 한판 즐기기 좋은 핫스팟.",

        query: "봉담 가브리엘 당구장",

        address: "경기 화성시 효행구 봉담읍 삼천병마로 1268 401호"

    },

    {

        id: 4,

        title: "장안대학교 학술정보관 (도서관 쉼터)",

        category: "study",

        categoryName: "📚 공강/스터디",

        rating: 4.9,

        likes: 210,

        dist: "캠퍼스 내부",

        badges: ["#꿀공강", "#쾌적함", "#무료WiFi"],

        desc: "조용히 쉴 수 있는 라운지와 노트북 존, 팀플 스터디룸이 완비된 장안대생 최고의 쉼터.",

        query: "장안대학교 학술정보관",

        address: "장안대학교 내부 학술정보관"

    },

    {

        id: 6,

        title: "양지 당구장",

        category: "play",

        categoryName: "🎮 놀거리/술집",

        rating: 4.6,

        likes: 108,

        dist: "학교 도보 5분",

        badges: ["#양지당구장", "#스트레스해소", "#친절함"],

        desc: "깔끔하게 정리된 포켓볼과 사구 다이를 이용할 수 있는 장안대 근처 인기 당구장.",

        query: "봉담 양지 당구장",

        address: "경기 화성시 효행구 봉담읍 삼천병마로 1276"

    },

    {

        id: 7,

        title: "투썸플레이스 화성봉담점",

        category: "cafe",

        categoryName: "☕ 카페",

        rating: 4.6,

        likes: 76,

        dist: "학교 도보 8분",

        badges: ["#스케일큼", "#케이크맛집", "#공부맛집"],

        desc: "넓고 스터디 존이 명확하게 구분되어 있어 조용하게 과제 및 자격증 공부하기 좋은 곳.",

        query: "투썸플레이스 화성봉담점",

        address: "경기 화성시 봉담읍 삼천병마로"

    },

    {

        id: 8,

        title: "봉담 볼링장",

        category: "play",

        categoryName: "🎮 놀거리/술집",

        rating: 4.8,

        likes: 156,

        dist: "학교 도보 8분",

        badges: ["#볼링장", "#락볼링", "#단체모임"],

        desc: "신나는 음악과 깔끔한 레인을 경험할 수 있는 곳! 과 동아리 뒷풀이나 내기 게임 추천.",

        query: "봉담 볼링장",

        address: "경기 화성시 효행구 봉담읍 샘마을길 39"

    },

    {

        id: 9,

        title: "장안대학교 학생식당 (학식)",

        category: "study",

        categoryName: "📚 공강/스터디",

        rating: 4.3,

        likes: 180,

        dist: "캠퍼스 내부",

        badges: ["#갓성비", "#빠른식사", "#학식러"],

        desc: "수업 쉬는 시간에 가장 빠르고 부담 없이 한 끼를 해결할 수 있는 장안대 학식 존.",

        query: "장안대학교 학생식당",

        address: "장안대학교 대학본부/학생회관"

    }

];



const categories = [

    { id: "all", name: "🔥 전체", icon: "fa-fire" },

    { id: "food", name: "🍕 맛집 전체", icon: "fa-utensils" },

    { id: "cafe", name: "☕ 카페/디저트", icon: "fa-mug-hot" },

    { id: "play", name: "🎮 놀거리/술집", icon: "fa-gamepad" },

    { id: "study", name: "📚 공강/스터디", icon: "fa-book-open" }

];



// State Management

let currentCategory = "all";

let searchQuery = "";

let bookmarks = JSON.parse(localStorage.getItem("jangan_bookmarks") || "[]");



// Initialization

window.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderPlaces();

    renderMapSidebar();

    updateBookmarkBadge();



    // Event Listeners

    document.getElementById("searchInput").addEventListener("input", (e) => {

        searchQuery = e.target.value.trim().toLowerCase();

        document.getElementById("clearSearchBtn").classList.toggle("hidden", searchQuery === "");

        renderPlaces();

    });



    document.getElementById("clearSearchBtn").addEventListener("click", () => {

        document.getElementById("searchInput").value = "";

        searchQuery = "";

        document.getElementById("clearSearchBtn").classList.add("hidden");

        renderPlaces();

    });



    document.getElementById("sortRatingBtn").addEventListener("click", () => {

        placeData.sort((a, b) => b.rating - a.rating);

        renderPlaces();

    });



    document.getElementById("sortLikeBtn").addEventListener("click", () => {

        placeData.sort((a, b) => b.likes - a.likes);

        renderPlaces();

    });

});



function renderCategories() {

    const container = document.getElementById("categoryContainer");

    container.innerHTML = categories.map(cat => `

        <button onclick="selectCategory('${cat.id}')" 

                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${

                    currentCategory === cat.id 

                    ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-300' 

                    : 'glass-panel text-gray-300 hover:bg-white/10 border-white/10'

                }">

            ${cat.name}

        </button>

    `).join("");

}



function selectCategory(catId) {

    currentCategory = catId;

    renderCategories();

    renderPlaces();

}



function renderPlaces() {

    const grid = document.getElementById("placesGrid");

    const emptyState = document.getElementById("emptyState");



    const filtered = placeData.filter(place => {

        const matchesCategory = currentCategory === "all" || place.category === currentCategory;

        const matchesSearch = place.title.toLowerCase().includes(searchQuery) ||

                              place.desc.toLowerCase().includes(searchQuery) ||

                              place.badges.some(b => b.toLowerCase().includes(searchQuery));

        return matchesCategory && matchesSearch;

    });



    document.getElementById("placeCount").innerText = filtered.length;



    if (filtered.length === 0) {

        grid.innerHTML = "";

        emptyState.classList.remove("hidden");

        return;

    }



    emptyState.classList.add("hidden");

    grid.innerHTML = filtered.map(place => {

        const isBookmarked = bookmarks.includes(place.id);

        const naverMapLink = `https://map.naver.com/v5/search/${encodeURIComponent(place.query)}`;



        return `

            <div class="glass-card rounded-2xl p-5 flex flex-col justify-between relative group">

                <!-- Top Info -->

                <div>

                    <div class="flex items-center justify-between mb-3">

                        <span class="px-2.5 py-1 rounded-md text-[11px] font-bold badge-tag">

                            ${place.categoryName}

                        </span>

                        <div class="flex items-center gap-2 text-xs">

                            <span class="text-amber-400 font-bold flex items-center gap-1">

                                <i class="fa-solid fa-star"></i> ${place.rating}

                            </span>

                            <button onclick="toggleBookmark(${place.id})" class="p-1 text-gray-400 hover:text-amber-400 transition">

                                <i class="${isBookmarked ? 'fa-solid fa-bookmark text-amber-400' : 'fa-regular fa-bookmark'}"></i>

                            </button>

                        </div>

                    </div>



                    <h3 class="text-lg font-black text-white group-hover:text-cyan-300 transition-colors mb-1">

                        ${place.title}

                    </h3>

                    <p class="text-xs text-gray-400 flex items-center gap-1 mb-3">

                        <i class="fa-solid fa-location-dot text-cyan-400"></i> ${place.dist}

                    </p>



                    <!-- Badges -->

                    <div class="flex flex-wrap gap-1.5 mb-4">

                        ${place.badges.map(b => `

                            <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">

                                ${b}

                            </span>

                        `).join("")}

                    </div>



                    <p class="text-xs text-gray-300 leading-relaxed font-light mb-6">

                        ${place.desc}

                    </p>

                </div>



                <!-- Footer Action -->

                <div class="pt-4 border-t border-white/10 flex items-center justify-between">

                    <span class="text-[11px] text-gray-500 truncate max-w-[150px]">${place.address}</span>

                    <a href="${naverMapLink}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition">

                        <i class="fa-solid fa-map-pin"></i> 길찾기

                    </a>

                </div>

            </div>

        `;

    }).join("");

}



function toggleBookmark(id) {

    if (bookmarks.includes(id)) {

        bookmarks = bookmarks.filter(bId => bId !== id);

    } else {

        bookmarks.push(id);

    }

    localStorage.setItem("jangan_bookmarks", JSON.stringify(bookmarks));

    renderPlaces();

    updateBookmarkBadge();

    renderBookmarkDrawerList();

}



function updateBookmarkBadge() {

    document.getElementById("bookmarkCount").innerText = bookmarks.length;

}



function toggleBookmarkDrawer() {

    const drawer = document.getElementById("bookmarkDrawer");

    drawer.classList.toggle("translate-x-full");

    renderBookmarkDrawerList();

}



function renderBookmarkDrawerList() {

    const listContainer = document.getElementById("bookmarkList");

    const bookmarkedPlaces = placeData.filter(p => bookmarks.includes(p.id));



    if (bookmarkedPlaces.length === 0) {

        listContainer.innerHTML = `

            <div class="text-center py-12 text-gray-500 text-xs">

                <i class="fa-regular fa-bookmark text-2xl mb-2"></i>

                <p>저장된 북마크가 없습니다.</p>

            </div>

        `;

        return;

    }



    listContainer.innerHTML = bookmarkedPlaces.map(place => `

        <div class="glass-card rounded-xl p-3 flex items-center justify-between gap-3">

            <div>

                <span class="text-[10px] text-cyan-400 font-semibold">${place.categoryName}</span>

                <h4 class="text-xs font-bold text-white">${place.title}</h4>

            </div>

            <div class="flex items-center gap-2">

                <a href="https://map.naver.com/v5/search/${encodeURIComponent(place.query)}" target="_blank" class="p-1.5 rounded bg-cyan-500/10 text-cyan-400 text-xs">

                    <i class="fa-solid fa-map"></i>

                </a>

                <button onclick="toggleBookmark(${place.id})" class="p-1.5 rounded bg-red-500/10 text-red-400 text-xs">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        </div>

    `).join("");

}



function renderMapSidebar() {

    const sidebar = document.getElementById("mapSidebarList");

    sidebar.innerHTML = placeData.slice(0, 6).map(place => `

        <div onclick="focusMapSpot('${place.title}', '${place.address}', '${place.query}')" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition border border-white/5 hover:border-cyan-500/30">

            <h4 class="text-xs font-bold text-white truncate">${place.title}</h4>

            <p class="text-[10px] text-gray-400 truncate">${place.address}</p>

        </div>

    `).join("");

}



function focusMapSpot(title, address, query) {

    document.getElementById("mapPreviewTitle").innerText = title;

    document.getElementById("mapPreviewDesc").innerText = address;

    document.getElementById("mapPreviewBtn").href = `https://map.naver.com/v5/search/${encodeURIComponent(query)}`;

}