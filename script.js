// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    html.classList.add('dark');
    darkModeToggle.checked = true;
}

// Handle dark mode toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// News slider functionality
const sliderContainer = document.querySelector('.news-slider .flex');
const prevButton = document.querySelector('.slider-nav.prev');
const nextButton = document.querySelector('.slider-nav.next');

// Sample news data for the slider
const newsData = [
    {
        image: 'https://placehold.co/300x200',
        title: 'നരേന്ദ്ര മോദിയുടെ വിജയത്തിൽ സന്തോഷമെന്ന് ട്രംപ്',
        category: 'World'
    },
    {
        image: 'https://placehold.co/300x200',
        title: 'കാനസ യൂണിവേഴ്സിറ്റി സംഭാരോപകരണ തന്ത്രജ്ഞൻ',
        category: 'America'
    },
    {
        image: 'https://placehold.co/300x200',
        title: 'പട്ടേൽ സമുദായത്തിന്റെ സ്ഥിതി എന്താണ് ലഭിക്കും',
        category: 'India'
    },
    {
        image: 'https://placehold.co/300x200',
        title: 'ഗോവൻ ഫാദർക്ക് നേരെ ഗുരുതരമായ ആരോപണം',
        category: 'Local'
    }
];

// Populate slider with news cards
function populateSlider() {
    newsData.forEach(news => {
        const card = document.createElement('div');
        card.className = 'flex-shrink-0 w-72 relative group';
        card.innerHTML = `
            <div class="relative h-48 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-sm">${news.category}</span>
                <img src="https://source.unsplash.com/random/300x200/?${news.category.toLowerCase()}" alt="News" class="w-full h-full object-cover">
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 class="text-white font-medium">${news.title}</h3>
                </div>
            </div>
        `;
        sliderContainer.appendChild(card);
    });
}

// Initialize slider
populateSlider();

// Slider navigation
let scrollAmount = 0;
const cardWidth = 288; // 272px + 16px gap

nextButton.addEventListener('click', () => {
    scrollAmount += cardWidth;
    if (scrollAmount > sliderContainer.scrollWidth - sliderContainer.clientWidth) {
        scrollAmount = sliderContainer.scrollWidth - sliderContainer.clientWidth;
    }
    sliderContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    sliderContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Add recommended news
const recommendedContainer = document.querySelector('aside.w-80 .space-y-4');

const recommendedNews = [
    {
        image: 'https://placehold.co/400x300',
        title: 'കുരുക്ഷേത്രയുടെ പ്രാധാന്യം - വസ്തുൻ',
        time: '4 hours ago'
    },
    {
        image: 'https://placehold.co/400x300',
        title: 'കാണാത്തായ ചെറു വിമാനത്തിന്റെ അവശിഷ്ടങ്ങൾ',
        time: '4 hours ago'
    },
    {
        image: 'https://placehold.co/400x300',
        title: 'പ്രണയം (ദീപ ബിന്ദു നായർ)',
        time: '7 hours ago'
    }
];

// Populate recommended news
function populateRecommended() {
    recommendedNews.forEach(news => {
        const item = document.createElement('div');
        item.className = 'flex gap-3';
        item.innerHTML = `
            <div class="w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                <img src="https://source.unsplash.com/random/200x150/?news" alt="News" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h4 class="text-sm font-medium dark:text-white line-clamp-2 mb-1">${news.title}</h4>
                <span class="text-xs text-gray-500">• ${news.time}</span>
            </div>
        `;
        recommendedContainer.appendChild(item);
    });
}

// Initialize recommended news
populateRecommended();
