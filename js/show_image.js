const festival = document.querySelector('.festival-text');
const student = document.querySelector('.student-text');
const video = document.querySelector('.video-text');
const festival_img = document.querySelector('.festival-img');
const student_img = document.querySelector('.student-img');
const video_img = document.querySelector('.video-img');

const plus = document.querySelector('.plus');

function show_festival() {
    festival.style.background = "teal";
    festival_img.style.display = "block";
    student.style.background = "lightseagreen";
    student_img.style.display = "none";
    video.style.background = "lightseagreen";
    video_img.style.display = "none";

    plus.href = "http://changpyeong.hs.jne.kr/user/boardList.action?command=list2&page=1&boardId=368094";
    plus.innerHTML = "행사 사진 더 보기";
}

function show_student() {
    festival.style.background = "lightseagreen";
    festival_img.style.display = "none";
    student.style.background = "teal";
    student_img.style.display = "block";
    video.style.background = "lightseagreen";
    video_img.style.display = "none";

    plus.href = "http://changpyeong.hs.jne.kr/user/boardList.action?command=list2&page=1&boardId=368096"
    plus.innerHTML = "학생 사진 더 보기";
}

function show_video() {
    festival.style.background = "lightseagreen";
    festival_img.style.display = "none";
    student.style.background = "lightseagreen";
    student_img.style.display = "none";
    video.style.background = "teal";
    video_img.style.display = "block";

    plus.href = "http://changpyeong.hs.jne.kr/user/boardList.action?command=list2&page=1&boardId=16954690"
    plus.innerHTML = "동영상 더 보기";
}

festival.addEventListener('click', function () {
    show_festival();
});

student.addEventListener('click', function () {
    show_student();
});

video.addEventListener('click', function () {
    show_video();
});

show_festival()