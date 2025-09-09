<div id="SuccessMessage" style="display:none; color:rgb(194, 14, 14);"></div>
<button onclick="showSuccess()">Run Command</button>
<script>
    function showSuccess(){
        document.getElementById('successMessage').innerHTML='Command executed successfully!';
        document.getElementById('successMessage').style.display='block';

    }
</script>