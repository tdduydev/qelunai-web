import test from 'node:test';
import assert from 'node:assert/strict';
import {solarToLunar,canChiDay,goodHours} from '../src/lib/vn-calendar.mjs';
for(const [y,m,d,ly,lm,ld] of [[2023,1,22,2023,1,1],[2024,2,10,2024,1,1],[2025,1,29,2025,1,1],[2026,2,17,2026,1,1],[2027,2,6,2027,1,1],[2026,10,29,2026,9,20]]){
  test(`VN lunar ${y}-${m}-${d}`,()=>{const actual=solarToLunar(y,m,d);assert.equal(actual.year,ly);assert.equal(actual.month,lm);assert.equal(actual.day,ld);});
}
test('leap months 2023 and 2025',()=>{
 assert.deepEqual([solarToLunar(2023,3,22).month,solarToLunar(2023,3,22).isLeapMonth],[2,true]);
 assert.deepEqual([solarToLunar(2025,7,25).month,solarToLunar(2025,7,25).isLeapMonth],[6,true]);
});
test('Can Chi and traditional hour chart October 29 2026',()=>{
 assert.equal(canChiDay(2026,10,29),'Bính Tý');
 assert.deepEqual(goodHours(2026,10,29).filter(x=>x.good).map(x=>x.branch),['Tý','Sửu','Mão','Ngọ','Thân','Dậu']);
});
test('reject out of range and invalid dates',()=>{
 assert.throws(()=>solarToLunar(2026,2,31),RangeError);
 assert.throws(()=>solarToLunar(2201,1,1),RangeError);
});
