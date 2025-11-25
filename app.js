let freedom = 0;
let totalSuccess = 0;

function addMission(name, time, difficulty) {
  const points = difficulty === '고난도' ? time*1 : time*0.5;
  freedom += points;
  totalSuccess += points;

  document.getElementById('freedom').textContent = freedom;
  document.getElementById('totalSuccess').textContent = totalSuccess;

  const li = document.createElement('li');
  li.textContent = `${name} (${difficulty}) - 획득 자유도: ${points}`;
  document.getElementById('missionList').appendChild(li);
}

function useReward(points, rewardName) {
  if(freedom >= points){
    freedom -= points;
    document.getElementById('freedom').textContent = freedom;
    alert(`${rewardName} 사용! 자유도 ${points} 차감`);
  } else {
    alert('자유도가 부족합니다!');
  }
}
