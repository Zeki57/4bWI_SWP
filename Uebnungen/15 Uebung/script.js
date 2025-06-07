let worte = ["otto", "hallo", "lagerregal", "welt", "rentner", "level", "javascript"];


for (let i = 0; i < worte.length; i++) {
    let wort = worte[i];
    let umgekehrt = wort.split("").reverse().join("");

    if (wort == umgekehrt) {
        console.log(wort);
    }

}