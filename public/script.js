document.getElementById('hanjaForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const hanjaInput = document.getElementById('hanjaInput').value;

    const response = await fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hanja: hanjaInput })
    });

    const data = await response.json();
    const resultTable = document.getElementById('resultTable');
    const resultBody = resultTable.querySelector('tbody');
    
    // 테이블과 버튼을 표시
    resultTable.style.display = 'table';
    document.getElementById('copyButton').style.display = 'inline';
    document.getElementById('downloadButton').style.display = 'inline';

    // 테이블의 tbody를 초기화
    resultBody.innerHTML = '';

    // 검색 결과를 테이블에 추가
    data.forEach(item => {
        let row = resultBody.insertRow();
        let cellHanja = row.insertCell(0);
        let cellMeaning = row.insertCell(1);
        cellHanja.textContent = item.hanja;
        cellMeaning.textContent = item.meaning;
    });
});

document.getElementById('copyButton').addEventListener('click', function() {
    const resultTable = document.getElementById('resultTable').querySelector('tbody');
    let textToCopy = '';

    for (let row of resultTable.rows) {
        textToCopy += `${row.cells[0].textContent}\t${row.cells[1].textContent}\n`;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('복사되었습니다!');
    }).catch(err => {
        console.error('복사 실패:', err);
    });
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const resultTable = document.getElementById('resultTable').querySelector('tbody');
    let textToDownload = '';

    for (let row of resultTable.rows) {
        textToDownload += `${row.cells[0].textContent}\t${row.cells[1].textContent}\n`;
    }

    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hanja_result.txt';
    a.click();
    URL.revokeObjectURL(url);
});