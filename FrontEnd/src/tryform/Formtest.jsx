function formtest()
{
    return(<>
        <body>
        <div className="container">
            <h1>File Upload</h1>
            <form id='form'>
                <div className="input-group">
                    <label htmlFor='name'>Your name</label>
                    <input name='name' id='name' placeholder="Enter your name" />
                </div>
                <div className="input-group">
                    <label htmlFor='files'>Select files</label>
                    <input id='files' type="file" multiple> </input>
                </div>
                <button className="submit-btn" type='submit'>Upload</button>
            </form>
        </div>
        <script src='./script.js'></script>
    </body>
        </>)
}
    

export default formtest ;