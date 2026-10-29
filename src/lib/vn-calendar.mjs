/** Qelunai website lunar-date engine. Independent JS adaptation of Qelunai's Dart engine.
 * Astronomical approximation: Meeus; UTC+7. Approximation near midnight can differ.
 * Supports 1900-2100. No third-party code copied; see docs/GROWTH_CALENDAR.md.
 */
const synodic=29.530588853,epoch=2415021.076998695,dr=Math.PI/180;
function jdn(d,m,y){const a=Math.floor((14-m)/12),yy=y+4800-a,mm=m+12*a-3;return d+Math.floor((153*mm+2)/5)+365*yy+Math.floor(yy/4)-Math.floor(yy/100)+Math.floor(yy/400)-32045;}

function nm(k,tz=7){
 const t=k/1236.85,t2=t*t,t3=t2*t;
 let jd=2415020.75933+synodic*k+0.0001178*t2-0.000000155*t3+0.00033*Math.sin((166.56+132.87*t-0.009173*t2)*dr);
 const m=(359.2242+29.10535608*k-0.0000333*t2-0.00000347*t3)*dr;
 const p=(306.0253+385.81691806*k+0.0107306*t2+0.00001236*t3)*dr;
 const f=(21.2964+390.67050646*k-0.0016528*t2-0.00000239*t3)*dr;
 let c=(0.1734-0.000393*t)*Math.sin(m)+0.0021*Math.sin(2*m)-0.4068*Math.sin(p)+0.0161*Math.sin(2*p)-0.0004*Math.sin(3*p)+0.0104*Math.sin(2*f)-0.0051*Math.sin(m+p)-0.0074*Math.sin(m-p)+0.0004*Math.sin(2*f+m)-0.0004*Math.sin(2*f-m)-0.0006*Math.sin(2*f+p)+0.001*Math.sin(2*f-p)+0.0005*Math.sin(2*p+m);
 const delta=t < -11?0.001+0.000839*t+0.0002261*t2-0.00000845*t3-0.000000081*t*t3:-0.000278+0.000265*t+0.000262*t2;
 return Math.floor(jd+c-delta+0.5+tz/24);
}

function solarlon(jd){const t=(jd-2451545)/36525,t2=t*t,m=(357.52910+35999.05030*t-0.0001559*t2-0.00000048*t*t2)*dr,l0=280.46645+36000.76983*t+0.0003032*t2;let dl=(1.914600-0.004817*t-0.000014*t2)*Math.sin(m)+(0.019993-0.000101*t)*Math.sin(2*m)+0.000290*Math.sin(3*m);let l=(l0+dl)*dr;return l-2*Math.PI*Math.floor(l/(2*Math.PI));}

function major(jd,tz=7){return Math.floor(solarlon(jd-.5-tz/24)/(Math.PI/6))%12;}

function m11(y,tz=7){let k=Math.floor((jdn(31,12,y)-epoch)/synodic),v=nm(k,tz);if(major(v,tz)>=9)v=nm(k-1,tz);return v;}

function leap(a,tz=7){const k=Math.floor(.5+(a-epoch)/synodic);let last=major(nm(k+1,tz),tz),i=1,arc;do{i++;arc=major(nm(k+i,tz),tz);if(arc===last)break;last=arc;}while(i<14);return i-1;}

function solarToLunar(y,m,d){
 if(!Number.isInteger(y)||y<1900||y>2100||!Number.isInteger(m)||m<1||m>12||!Number.isInteger(d)||d<1||d>31)throw new RangeError("Unsupported date");
 const u=new Date(Date.UTC(y,m-1,d));if(u.getUTCFullYear()!==y||u.getUTCMonth()!==m-1||u.getUTCDate()!==d)throw new RangeError("Invalid date");
 const day=jdn(d,m,y),k=Math.floor((day-epoch)/synodic);let start=nm(k+1);if(start>day)start=nm(k);
 let a=m11(y),b=a,ly;if(a>=start){ly=y;a=m11(y-1);}else{ly=y+1;b=m11(y+1);}
 const diff=Math.floor((start-a)/29);let lm=diff+11, isLeap=false;
 if(b-a>365){const leapDiff=leap(a);if(diff>=leapDiff){lm=diff+10;if(diff===leapDiff)isLeap=true;}}
 if(lm>12)lm-=12;if(lm>=11&&diff<4)ly--;
 return {day:day-start+1,month:lm,year:ly,isLeapMonth:isLeap};
}

function canChiDay(y,m,d){const can=["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"],chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],n=jdn(d,m,y);return `${can[(n+9)%10]} ${chi[(n+1)%12]}`;}

function canChiYear(year){const can=["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"],chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],n=(year-1984+6000)%60;return `${can[n%10]} ${chi[n%12]}`;}

function goodHours(y,m,d){const chi=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],spirits=["Thanh Long","Minh Đường","Thiên Hình","Chu Tước","Kim Quỹ","Kim Đường","Bạch Hổ","Ngọc Đường","Thiên Lao","Huyền Vũ","Tư Mệnh","Câu Trận"],n=jdn(d,m,y),gov=(n+1)%12,origin=(2*((gov-2+12)%6))%12;return chi.map((branch,i)=>{const spirit=(i-origin+12)%12;return {branch,from:(2*i+23)%24,to:(2*i+1)%24,name:spirits[spirit],good:[0,1,4,5,7,10].includes(spirit)};});}
export { jdn, solarToLunar, canChiDay, canChiYear, goodHours };
