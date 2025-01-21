function DNAcount(s) {
    let arrChars = ['A', 'C', 'G', 'T'];
    let arrCount = [0, 0, 0, 0];

    while (s.length > 100) {
        s = s.slice(0, -1);
    }

    for (let index = 0; index < s.length; index++) {
        switch (s[index]) {
            case arrChars[0]:
                arrCount[0]++;
                break;
            case arrChars[1]:
                arrCount[1]++;
                break;
            case arrChars[2]:
                arrCount[2]++;
                break;
            case arrChars[3]:
                arrCount[3]++;
                break;
            default:
                break;
        }

    }

    console.log(arrChars[0] + " " + arrChars[1] + " " + arrChars[2] + " " + arrChars[3]);
    console.log(arrCount[0] + " " + arrCount[1] + " " + arrCount[2] + " " + arrCount[3]);
}

let s = "ATGCTTCAGAAAAGGTCAGCG";


DNAcount(s);