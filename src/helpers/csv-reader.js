import * as XLSX from 'xlsx';

export function csvReader(file, callback) {
    var name = file.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        /* Update state */

        let updatedData;
        updatedData = parseInvestmentData(data);
        callback(updatedData);
    };
    reader.readAsBinaryString(file);
}

export function fetchCsv(url) {
    return fetch(url).then(function (response) {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result) {
            return decoder.decode(result.value);
        });
    });
}

export function parseInvestmentData(data) {
    return data
        .split('\n')
        .map(line => line.split(','))
        .filter(line => line[0] && line[1])
        .map((line, i) =>  { 
            debugger;
            return { 
                day: line[0],
                value: line[1],
                // accumulatedReturn: 0
             } 
        });
}

export function parseHistoricalData(data) {
    return data
        .split('\n')
        .map(line => line.split(','))
        .filter(line => line[0] && line[1])
        .splice(1)
        .map((line, i) =>  { 
            return { 
                time: new Date(line[0]).getTime(),
                open: parseFloat(line[1]),
                high: parseFloat(line[2]),
                low: parseFloat(line[3]),
                close: parseFloat(line[4]),
                adjClose: parseFloat(line[5]),
                volume: parseFloat(line[6])
             } 
        });
}