//  分类按钮组 start
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tabbed li');
    var switchers = document.querySelectorAll('.switcher-box a');
    var skinable = document.getElementById('skinable');

    for (var i = 0, len = tabs.length; i < len; i++) {
        tabs[i].addEventListener('click', function () {
            if (this.classList.contains('active')) return;

            var parent = this.parentNode,
                innerTabs = parent.querySelectorAll('li');

            for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
                innerTabs[index].classList.remove('active');
            }

            this.classList.add('active');
        });
    }

    for (var i = 0, len = switchers.length; i < len; i++) {
        switchers[i].addEventListener('click', function () {
            if (this.classList.contains('active')) return;

            var parent = this.parentNode,
                innerSwitchers = parent.querySelectorAll('a'),
                skinName = this.getAttribute('skin');

            for (var index = 0, iLen = innerSwitchers.length; index < iLen; index++) {
                innerSwitchers[index].classList.remove('active');
            }

            this.classList.add('active');
            skinable.className = 'tabbed round ' + skinName;
        });
    }
});

//  分类按钮组 end

// 底部分页按钮 start
const c = document.querySelector('.container');
const indexs = Array.from(document.querySelectorAll('.index'));
let cur = -1;
indexs.forEach((index, i) => {
    index.addEventListener('click', e => {
        // clear
        c.className = 'container';
        void c.offsetWidth; // Reflow
        c.classList.add('open');
        c.classList.add(`i${i + 1}`);
        if (cur > i) {
            c.classList.add('flip');
        }
        cur = i;
    });
});
// 底部分页按钮 end
