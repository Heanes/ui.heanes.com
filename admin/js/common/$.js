/**
 * @doc 扩展
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
$(function () {

    /**
     * @doc 扩展jQuery对象，添加自定义函数
     * @author Heanes
     * @time 2016-12-12 17:06:29 周一
     */
    $.extend({

        /* ------------------------------ 提示消息类 ------------------------------ */
        // 消息常量
        messageConstants: {
            type: {
                success:    'success',
                info:       'info',
                warn:       'warn',
                error:      'error'
            },
            classPrefix:    'ui-heanes-',
            defaultParams: {
                content: 'this is a message', // string || object(jQuery) 消息内容
                type: 'info', // string success||error||warn||info消息类型
                delay: 3000, // int 展示时间，单位为毫秒
                fadeOutDelay: 1000, // int 消失动画延迟时间，单位为毫秒
                canBeClose: true, // boolean 是否能被关闭
                showIcon: false, // boolean 是否显示图标
                classPrefix:    'ui-heanes-'
            }
        },
        /**
         * @doc 消息展示加强版 todo 增加时间戳；记录消息历史
         * @author Heanes
         * @time 2016-12-13 12:04:53 周二
         */
        messagePlus: function messageGlobal(paramObject){
            paramObject = paramObject || $.messageConstants.defaultParams;
            var $documentTop = $(window.top.document);
            var $messageGlobal = $documentTop.find('#messageGlobal');
            var messageClass = paramObject.classPrefix + 'message';
            var messageWrapDomStr =
                '<div class="message-wrap">'
                + '<div class="' + messageClass + '">'
                + '<div class="message-handle">'
                + '<span class="btn-close">x</span>'
                + '</div>'
                + '<div class="message-content">'
                + '</div>'
                + '</div>'
                + '</div>';
            var $messageWrap = $(messageWrapDomStr);
            var $message = $messageWrap.find('.' + messageClass);
            var $messageContent = $message.find('.message-content');
            $messageContent.append(paramObject.content);
            paramObject.type = paramObject.type || 'success';
            switch (type){
                case $.messageConstants.type.success:
                    $message.addClass('message-success');
                    break;
                case $.messageConstants.type.info:
                    $message.addClass('message-info');
                    break;
                case $.messageConstants.type.warn:
                    $message.addClass('message-warning');
                    break;
                case $.messageConstants.type.error:
                    $message.addClass('message-error');
                    break;
            }
            $messageGlobal.append($messageWrap);
            $messageGlobal.show();
            if(paramObject.delay != 0){
                var delay = delay || 3000;
                var fadeOutDelay = paramObject.fadeOutDelay || 1000;
                $messageWrap.delay(delay).fadeOut(fadeOutDelay, function(){$(this).remove() });
            }
            // 点击关闭
            $message.on('click', '.btn-close', function (event) {
                var $delegateTarget = $(event.delegateTarget);
                $delegateTarget.fadeOut();
            });
        },
        /**
         * @doc 全局消息展示
         * @param $content string || object(jQuery) 消息内容
         * @param type string success||error||warn||info消息类型
         * @param delaySec 展示时间，单位为毫秒
         * @param fadeOutDelay 消失动画延迟时间，单位为毫秒
         * @author Heanes
         * @time 2016-12-01 17:55:27 周四
         */
        messageGlobal: function messageGlobal($content, type, delaySec, fadeOutDelay){
            var $documentTop = $(window.top.document);
            var $messageGlobal = $documentTop.find('#messageGlobal');
            var messageClass = $.messageConstants.classPrefix + 'message';
            var messageWrapDomStr =
                '<div class="message-wrap">'
                + '<div class="' + messageClass + '">'
                + '<div class="message-handle">'
                + '<span class="btn-close">x</span>'
                + '</div>'
                + '<div class="message-content">'
                + '</div>'
                + '</div>'
                + '</div>';
            var $messageWrap = $(messageWrapDomStr);
            var $message = $messageWrap.find('.' + messageClass);
            var $messageContent = $message.find('.message-content');
            $messageContent.append($content);
            type = type || 'success';
            switch (type){
                case $.messageConstants.type.success:
                    $message.addClass('message-success');
                    break;
                case $.messageConstants.type.info:
                    $message.addClass('message-info');
                    break;
                case $.messageConstants.type.warn:
                    $message.addClass('message-warning');
                    break;
                case $.messageConstants.type.error:
                    $message.addClass('message-error');
                    break;
            }
            $messageGlobal.append($messageWrap);
            $messageGlobal.show();
            if(delaySec != 0){
                delaySec = delaySec || 3000;
                fadeOutDelay = fadeOutDelay || 1000;
                $messageWrap.delay(delaySec).fadeOut(fadeOutDelay, function(){$(this).remove()});
            }
            // 点击关闭
            $messageWrap.on('click', '.btn-close', function (event) {
                var $delegateTarget = $(event.delegateTarget);
                $delegateTarget.fadeOut(fadeOutDelay, function(){$(this).remove()});
            });
        },

        /**
         * @doc 局部消息展示
         * @param $target object(jQuery) 放置消息的容器(jQuery对象)
         * @param $content string || object(jQuery) 消息内容
         * @param type string success||error||warn||info消息类型
         * @param delaySec 展示时间
         * @param fadeOutDelay 消失动画延迟时间，单位为毫秒
         * @author Heanes
         * @time 2016-12-01 17:55:27 周四
         */
        messageLocal: function messageLocal($target, $content, type, delaySec, fadeOutDelay){
            if($target == undefined || $target.length == 0) console.error('Error: the message target is null');
            var messageClass = $.messageConstants.classPrefix + 'message';
            var messageWrapDomStr =
                '<div class="message-wrap">'
                + '<div class="' + messageClass + '">'
                + '<div class="message-handle">'
                + '<span class="btn-close">x</span>'
                + '</div>'
                + '<div class="message-content">'
                + '</div>'
                + '</div>'
                + '</div>';
            var $messageWrap = $(messageWrapDomStr);
            var $message = $messageWrap.find('.' + messageClass);
            var $messageContent = $message.find('.message-content');
            $messageContent.append($content);
            type = type || 'success';
            switch (type){
                case $.messageConstants.type.success:
                    $message.addClass('message-success');
                    break;
                case $.messageConstants.type.info:
                    $message.addClass('message-info');
                    break;
                case $.messageConstants.type.warn:
                    $message.addClass('message-warning');
                    break;
                case $.messageConstants.type.error:
                    $message.addClass('message-error');
                    break;
            }
            $target.append($messageWrap);
            $target.show();
            if(delaySec != 0){
                delaySec = delaySec || 3000;
                fadeOutDelay = fadeOutDelay || 1000;
                $messageWrap.delay(delaySec).fadeOut(fadeOutDelay, function(){$(this).remove()});
            }
            // 点击关闭
            $messageWrap.on('click', '.btn-close', function (event) {
                var $delegateTarget = $(event.delegateTarget);
                $delegateTarget.fadeOut(fadeOutDelay, function(){$(this).remove()});
            });
        }
        /* ------------------------------ 提示消息类 ------------------------------ */


    });
});
