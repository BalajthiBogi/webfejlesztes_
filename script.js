document.getElementById("mybutton").addEventListener
("click", korszak);

function korszak(){

        let pontok = 0;

        const a = document.getElementById("1.1").checked;
		const b = document.getElementById("1.2").checked;
		const c = document.getElementById("1.3").checked;
        const d = document.getElementById("1.4").checked;

        if (a==1){
            pontok=pontok+1;}
        if (b==1){
            pontok=pontok+2;}
        if (c==1){
            pontok=pontok+3;}
        if (d==1){
            pontok=pontok+4;}
            
            
        const e = document.getElementById("2.1").checked;
        const f = document.getElementById("2.2").checked;
        const g = document.getElementById("2.3").checked;
        const h = document.getElementById("2.4").checked;
    
        if (e==1){
            pontok=pontok+1;}
        if (f==1){
            pontok=pontok+2;}
        if (g==1){
            pontok=pontok+3;}
        if (h==1){
            pontok=pontok+4;}

        const i = document.getElementById("3.1").checked;
        const j = document.getElementById("3.2").checked;
        const k = document.getElementById("3.3").checked;
        const l = document.getElementById("3.4").checked;
        
        if (i==1){
                pontok=pontok+1;}
        if (j==1){
                pontok=pontok+2;}
        if (k==1){
                pontok=pontok+3;}
        if (l==1){
                pontok=pontok+4;}

        const m = document.getElementById("4.1").checked;
        const n = document.getElementById("4.2").checked;
        const o = document.getElementById("4.3").checked;
        const p = document.getElementById("4.4").checked;
                
        if (m==1){
                pontok=pontok+1;}
        if (n==1){
                pontok=pontok+2;}
        if (o==1){
                pontok=pontok+3;}
        if (p==1){
                pontok=pontok+4;}

        const q = document.getElementById("5.1").checked;
        const r = document.getElementById("5.2").checked;
        const s = document.getElementById("5.3").checked;
        const t = document.getElementById("5.4").checked;
                        
        if (q==1){
                pontok=pontok+1;}
        if (r==1){
                pontok=pontok+2;}
        if (s==1){
                pontok=pontok+3;}
        if (t==1){
                pontok=pontok+4;}

        const u = document.getElementById("6.1").checked;
        const v = document.getElementById("6.2").checked;
        const w = document.getElementById("6.3").checked;
        const x = document.getElementById("6.4").checked;
                                
        if (u==1){
                pontok=pontok+1;}
        if (v==1){
                pontok=pontok+2;}
        if (w==1){
                pontok=pontok+3;}
        if (x==1){
                pontok=pontok+4;}


        
        if(pontok < 11){
            alert(`1960-as évek – Te vagy a retro, bohém stílus híve! Szereted a merész színeket és a játékos mintákat.`)
        }
        if(pontok > 10 && pontok < 16){
            alert(`1980-as évek – Az energikus, feltűnő és extrém divatvilág vonz. Az öltözködésedet a merészség és az önkifejezés jellemzi.`)
        }
        if(pontok > 15 && pontok < 21){
            alert(`2000-es évek – Te vagy a retró modern változata! Imádod a minimalizmust, de nem félsz a nosztalgikus kiegészítőktől.`)
        }
        if(pontok > 20){
            alert(`Napjaink – A modern, kifinomult és letisztult stílus a te világod. Szereted a kényelmes, de divatos darabokat.`)
        } 
        if (pontok < 11) {
                document.body.style.backgroundImage = "url('quiz_kepek/quiz1.jpg')";
            } else if (pontok > 10 && pontok < 16) {
                document.body.style.backgroundImage = "url('quiz_kepek/quiz2.jpg')";
            } else if (pontok > 15 && pontok < 21) {
                document.body.style.backgroundImage = "url('quiz_kepek/quiz3.jpg')";
            } else if (pontok > 20) {
                document.body.style.backgroundImage = "url('quiz_kepek/quiz4.jpg')";
            }
}





