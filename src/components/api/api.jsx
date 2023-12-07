import axios from 'axios';
export const handleMenuItemClick = async (id, content,isOn) => {
    console.log(`메뉴 id: ${id}, 내용: ${content}, isOn: ${isOn}`);
    if (isOn==undefined){
        //main일땐 isOn 안 오므로
        isOn=true;
    }
    const gender = isOn?'male':'female';
    // const url=`https://imnotalone.shop:8090/voice/create?prompt=${content}&gender=${gender}`;
    // try {
    //   // Axios를 사용하여 POST 요청 보내기
    //   const response = await axios.post(url);
    //   // POST 요청이 성공한 경우 (API 응답에 따라 조절 필요)
    //   if (response.data.done) {
    //     console.log('POST 요청 성공');

    //     // POST 요청이 성공하면 GET 요청 보내기
    //     const getResponse = await axios.get(url);
    //     console.log('GET 요청 성공', getResponse.data);
    //     // WAV 데이터를 Blob으로 변환
    //     const wavBlob = new Blob([ getResponse.data], { type: 'audio/wav' });
    //     // Blob으로부터 임시 URL 생성
    //     const audioUrl = URL.createObjectURL(wavBlob);
    //     const audio = new Audio(audioUrl);
    //     audio.play()
    //     .then(() => {
    //     console.log('오디오 재생 성공');
    //     })
    //     .catch((error) => {
    //     console.error('오디오 재생 실패', error);
    //     });
        
    //   } else {
    //     console.error('POST 요청 실패');
    //   }
    // } catch (error) {
    //   console.error('에러:', error);
    // }

  };
