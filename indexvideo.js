
      function loadVideo() {
        var file = document.querySelector('input[type="file"]').files[0];
        var video = document.getElementById('videoPlayer');
        var source = document.createElement('source');

        if (file.type.match('video.*')) {
          var url = URL.createObjectURL(file);
          source.setAttribute('src', url);
          video.appendChild(source);
          document.querySelector('.loading').style.display = 'block';
          video.load();
          video.addEventListener('loadeddata', function(){
            document.querySelector('.loading').style.display = 'none';
          });
         
        
        } else {
          alert('El archivo seleccionado no es un vídeo válido');
        }
      }
    