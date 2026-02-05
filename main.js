// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var disqus_shortname = 'plakangteau';
var disqus_loaded = false;

function loadDisqus(identifier) {
    var page_url = window.location.href.split('#')[0] + '#' + identifier;
    var page_identifier = identifier;

    if (window.DISQUS) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.url = page_url;
                this.page.identifier = page_identifier;
            }
        });
    } else {
        var disqus_config = function () {
            this.page.url = page_url;
            this.page.identifier = page_identifier;
        };

        if (!disqus_loaded) {
            var d = document, s = d.createElement('script');
            s.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            disqus_loaded = true;
        }
    }
}

var disqusModal = document.getElementById('disqus-modal');
if (disqusModal) {
    disqusModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var identifier = button.getAttribute('data-identifier');
        loadDisqus(identifier);
    });
}