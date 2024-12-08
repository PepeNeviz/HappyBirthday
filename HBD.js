document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading1').style.display = 'none';
        document.getElementById('loading2').style.display = 'flex';
        setTimeout(function() {
            document.getElementById('loading2').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 5000); // 5 detik buat animasi kedua
    }, 7500); // 7,5 detik buat animasi pertama
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function() {
    const textElement1 = document.getElementById("text1");
    const textElement2 = document.getElementById("text2");
    const imageElement1 = document.getElementById("img1");
    const text1 = "Happy Birthday Rifqi!🥳🥳";
    const text2 = "Selamat mendekati kematian🥳🥳";
    let index = 0;

    function typeText(text, element, showImage, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeText(text, element, showImage, callback), 100);
        } else {
            if (showImage) {
                imageElement1.classList.add('show'); // Tambahin class show buat animasi
            }
            index = 0;
            setTimeout(callback, 2000); // Delay 2 detik sebelum ke animasi berikutnya
        }
    }

    function startTyping() {
        textElement1.classList.add("typing");
        typeText(text1, textElement1, true, function() {
            document.getElementById('loading1').style.display = 'none';
            document.getElementById('loading2').style.display = 'flex';
            textElement2.classList.add("typing");
            typeText(text2, textElement2, false, function() {
                textElement2.classList.remove("typing");
                document.getElementById('loading2').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            });
        });
    }

    setTimeout(startTyping, 0); // Mulai animasi setelah halaman siap
});

function navigate(page) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Tampilkan halaman yang dipilih
    document.getElementById(page).classList.add('active');
}

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const zoomImg = document.getElementById("zoomImg");
    const closeBtn = document.getElementById("closeBtn");

    zoomImg.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        document.body.style.overflow = 'hidden'; // Disable scrolling on the background
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Enable scrolling
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }
});

