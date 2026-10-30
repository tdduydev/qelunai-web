import test from 'node:test';
import assert from 'node:assert/strict';
import {pickStore,storeUrls} from '../src/lib/store-pick.mjs';
const ua={
 iphone:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
 ipad:'Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
 ipod:'Mozilla/5.0 (iPod touch; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
 ipados:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
 zaloIos:'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Zalo iOS/486',
 android:'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36',
 androidTablet:'Mozilla/5.0 (Linux; Android 13; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
 windows:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
 linux:'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
};
test('iPhone, iPad and iPod go to the App Store',()=>{
 for(const k of ['iphone','ipad','ipod','zaloIos']) assert.equal(pickStore(ua[k]),'app-store',k);
});
test('iPadOS reporting a Mac goes to the App Store only with touch',()=>{
 assert.equal(pickStore(ua.ipados,5),'app-store');
 assert.equal(pickStore(ua.ipados,0),null);
 assert.equal(pickStore(ua.ipados),null);
});
test('Android phones and tablets go to Google Play',()=>{
 assert.equal(pickStore(ua.android),'google-play');
 assert.equal(pickStore(ua.androidTablet,10),'google-play');
});
test('desktops and unknown agents stay on the page',()=>{
 for(const k of ['windows','linux']) assert.equal(pickStore(ua[k]),null,k);
 assert.equal(pickStore(''),null);
 assert.equal(pickStore(undefined),null);
});
test('store URLs',()=>{
 assert.equal(storeUrls['app-store'],'https://apps.apple.com/app/id6827871126');
 assert.equal(storeUrls['google-play'],'https://play.google.com/store/apps/details?id=com.qelunai.qelunai');
});
