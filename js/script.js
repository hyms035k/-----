// DOMが完全に読み込まれてからスクリプトを実行するためのラッパー
document.addEventListener('DOMContentLoaded', () => {

    // ヘッダー要素を取得
    const header = document.getElementById('main-header');

    // header要素が存在しない場合は、ここで処理を終了
    if (!header) {
        return;
    }

    // スクロール時のイベントリスナーを設定
    window.addEventListener('scroll', () => {
        // スクロール位置が10pxより大きいかどうかをチェック
        if (window.scrollY > 10) {
            // 10pxより多くスクロールされていたら、.scrolledクラスを追加
            header.classList.add('scrolled');
        } else {
            // 10px以下の位置に戻ったら、.scrolledクラスを削除
            header.classList.remove('scrolled');
        }
    });

    // ===== ハンバーガーメニュー制御 =====
    const toggleButton = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // トグルボタンまたはモバイルメニューが存在しない場合は処理を終了
    if (!toggleButton || !mobileMenu) {
        return;
    }

    toggleButton.addEventListener('click', () => {
        // メニューパネルの表示/非表示を切り替え
        // 'translate-x-full'クラスをトグルすることで、CSSのtransformが適用/解除される
        mobileMenu.classList.toggle('opened');

        // ハンバーガーアイコンを「三」から「×」にトグルするためのクラスをボタンに追加
        toggleButton.classList.toggle('open');
    });

    // ===== PC用ドロップダウンメニュー制御 (レスポンシブ対応) =====
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const lgBreakpoint = 1200; // lgブレークポイントの値を定義

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // lgサイズ未満の場合のみ、クリックで開閉させる
            if (window.innerWidth < lgBreakpoint) {
                e.preventDefault(); // アンカーのデフォルトのページ遷移を無効化

                const parentLi = toggle.closest('li.group');

                // 他の開いているメニューを閉じる
                document.querySelectorAll('.header-menu li.group.is-open').forEach(openLi => {
                    if (openLi !== parentLi) {
                        openLi.classList.remove('is-open');
                    }
                });

                // クリックされたメニューの開閉をトグル
                parentLi.classList.toggle('is-open');
            }
            // lgサイズ以上の場合は、通常のリンクとして機能し、CSSのhoverがメニュー開閉を担う
        });
    });

    // メニュー外をクリックしたときにメニューを閉じる (lgサイズ未満でのみ動作)
    window.addEventListener('click', (e) => {
        if (window.innerWidth < lgBreakpoint) {
            if (!e.target.closest('.header-menu li.group')) {
                document.querySelectorAll('.header-menu li.group.is-open').forEach(openLi => {
                    openLi.classList.remove('is-open');
                });
            }
        }
    });

    // ウィンドウリサイズ時に、lgサイズ以上になったらクリックで開いたメニューを閉じる
    window.addEventListener('resize', () => {
        if (window.innerWidth >= lgBreakpoint) {
            document.querySelectorAll('.header-menu li.group.is-open').forEach(openLi => {
                openLi.classList.remove('is-open');
            });
        }
    });
});