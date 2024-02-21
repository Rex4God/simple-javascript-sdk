"use strict";
const iframeSDK = {
    loadContent: function(url) {
        const iframe = document.createElement('iframe');
        
        iframe.src = url;
        iframe.width = '100%'; 
        iframe.height = '700px'; 

        document.body.appendChild(iframe);
    }
};
