<style >
 .modal-bg {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.8);
  z-index: 999;
  display: none;
  top: 0;
  left: 0;
  } 
 .modal {
  visibility: hidden;
  text-align:center;
  top: -400px; 
  left: 40%;
  margin-left: -250px;
  width: 690px;
  background: url(modal-gloss.png) no-repeat -200px -80px;
  position: absolute;
  z-index: 9999;
  padding: 30px 40px 34px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 0 0 10px rgba(0,0,0,.4);
  -webkit-box-shadow: 0 0 10px rgba(0,0,0,.4);
  -box-shadow: 0 0 10px rgba(0,0,0,.4);
  }
  
 .modal.small   { width: 200px; margin-left: -140px;}
 .modal.medium   { width: 400px; margin-left: -240px;}
 .modal.large   { width: 600px; margin-left: -340px;}
 .modal.xlarge   { width: 800px; margin-left: -440px;}
 
 .modal .close-modal {
  font-size: 42px;
  line-height: .5;
  position: absolute;
  top: 24px;
  right: 33px;
  color: red;
  text-shadow: 0 -1px 1px rbga(0,0,0,.6);
  font-weight: bold;
  cursor: pointer;
  }
 .big-link { display:block; margin-top: 100px; text-align: center; font-size: 70px; color: #06f; }
</style>
  <!-- <script type="text/javascript" src="jquery-1.4.4.min.js"></script> -->
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script type="text/javascript" src="https://seovnpro.googlecode.com/files/popup.js"></script>


<script type="text/javascript" >
    jQuery.noConflict();      /* dòng chống conflict jquery */
    jQuery(window).load(function() {
        if(document.cookie.indexOf("adf") == -1) /*  Bỏ dòng này thì nó hiện thông báo liên tục mỗi khi mở web lên rất là phiền  */
        {
            document.cookie = "popunder1=adf";
            jQuery('#myModal').bittuotblog(jQuery('#myModal').data());
        }
    });
</script>
<div id="myModal" class="modal">
   <img src="http://hyundaihillstate.com.vn/wp-content/uploads/2014/03/Untitled.png" />
   <a class="close-modal">X</a>
</div>