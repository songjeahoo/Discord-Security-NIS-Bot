// NIS.js

// 기능과 설치 방법을 위한 DOM 요소 선택
const featuresSection = document.getElementById('features');
const installationSection = document.getElementById('installation');

// 기능과 설치 방법을 보여주는 함수
function showSection(section) {
    // 모든 섹션 숨기기
    featuresSection.style.display = 'none';
    installationSection.style.display = 'none';

    // 선택된 섹션 보이기
    if (section === 'features') {
        featuresSection.style.display = 'block';
    } else if (section === 'installation') {
        installationSection.style.display = 'block';
    }
}

// 상단 메뉴 클릭 시 이벤트 리스너 추가
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1);
        showSection(target); // 선택한 섹션을 보여줌
        const targetElement = document.getElementById(target);
        targetElement.scrollIntoView({ behavior: 'smooth' }); // 부드러운 스크롤 효과
    });
});

// 초기 상태에서는 기능과 설치 방법을 숨김
featuresSection.style.display = 'none';
installationSection.style.display = 'none';
