<?php include "header.php" ?>
<section id="add-prop-section-wrapper">
    <h1>Add New Vlog</h1>
    <p>We are glad to see you again!</p>
    <form action="" method="post" id="add-prop-form" enctype="multipart/form-data">
        <h2>Vlogy Description</h2>
        <article id="prop-description">
            <div class="title">
                <label for="">Vlog Title</label>
                <input type="text" name="vlogtitle">
            </div>
            <div class="description">
                <label for="">Vlog Description</label>
                <textarea name="vlogdescription" id="vlogdescription" cols="30" rows="10"></textarea>
            </div>
        </article>
        <h2>Category</h2>
        <article id="prop-description">
            <div class="title">
                <label for="">Vlog Category</label>
                <select name="vlogcategory" id="">
                    <option value="">Select</option>
                    <option value="news">News</option>
                    <option value="sports">Sports</option>
                    <option value="fashion">Fashion</option>
                    <option value="tech">Tech</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>
            </div>
        </article>

        <h2>Media</h2>
        <input type="file" name="vlogimage"><br><br>
        <button type="submit" name="submitvlogbtn" id="add-prop-formBotton">Submit Vlog</button>
    </form>
</section>

</main>

<?php include "footer.php" ?>