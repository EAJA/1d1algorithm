## sol
```
citations 의 중간값을 구해서
중간값 까지만 for문 사용 -> h번 이하 인용
올라가는 도중 실패시 반복문 끝 -> h번 이상 인용

archive -> 남의 풀이인데
citations[i]값이 i+1 이하 -> h번 이상 인용 이므로
중간값을 안구하고 필터를 사용하지 않아서 훨씬 빠름
```
## error
```
```
## 문제
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.  
어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.  
  
어떤 과학자가 발표한 논문 n편 중,  
`h번 이상 인용된 논문이 h편 이상`이고  
`나머지 논문이 h번 이하 인용`되었다면  
`h의 최댓값이 이 과학자의 H-Index`입니다.
  
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때,  
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.  
  
### 제한사항  
  
- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.  
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.  
  
### 입출력 예  
  
| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | 3      |
  
<br/>
  
### 입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.  
그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.  
  
※ 공지 - 2019년 2월 28일 테스트 케이스가 추가되었습니다.  