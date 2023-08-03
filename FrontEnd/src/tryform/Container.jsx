import React, { useState } from 'react';
function Formtest()
{
    return(<>
        <body>
        <div className="container">
        <form>
    <input type="text" name="file-name" id="name " />
    <input type="file" name="file" id="files" multiple />
    <button type="submit">Submit</button>
</form>
        </div>
        <script src='./script.js'></script>
    </body>
        </>)
}
    

export default Formtest ;