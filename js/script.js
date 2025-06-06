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

});