import fs from 'fs';
// import path from 'path';

// 병합된 데이터를 JSON 파일에 저장하는 함수
const saveMergedDataToFile = (mergedData, outputFilePath) => {
  // outputFilePath가 존재하지 않을 경우 파일 생성
  if (!fs.existsSync(outputFilePath)) {
    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(mergedData, null, 2),
      'utf-8',
    );
  } else {
    // 파일이 존재할 경우, 기존 데이터를 읽어와서 병합
    const existingData = JSON.parse(fs.readFileSync(outputFilePath, 'utf-8'));
    const newData = { ...existingData, ...mergedData }; // 기존 데이터와 새로운 데이터를 병합
    fs.writeFileSync(outputFilePath, JSON.stringify(newData, null, 2), 'utf-8'); // 병합된 데이터를 파일에 저장
  }
};

const mergeJSONLoader = (filePaths) => {
  const mergedData = {};

  filePaths.forEach((filePath) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    Object.assign(mergedData, data);
  });

  return mergedData;
};

export { mergeJSONLoader, saveMergedDataToFile };
