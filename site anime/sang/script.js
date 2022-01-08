<script lang="javascript">
    var canvas = document.querySelector('#canevas1');
    var contexte = canvas.getContext('2d');
    
    function goutte()
    {
    contexte.fillStyle="red";
    contexte.beginPath();
    contexte.arc(250,250,100,0,Math.PI*2);
    contexte.closePath();
    contexte.fill();

    contexte.beginPath();
    contexte.fillStyle="red";
    contexte.moveTo(250,25);
    contexte.quadraticCurveTo(250,110,178,180);
    contexte.lineTo(322,180);
    contexte.quadraticCurveTo(250,110,250,25);
    contexte.fill();
    }
    goutte();

</script>