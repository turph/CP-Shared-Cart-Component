var mn=$(".sectionNav");mns="sectionNav-scrolled",hdr=$("header").height(),$(window).scroll(function(){$(this).scrollTop()>hdr?mn.addClass(mns):mn.removeClass(mns)});