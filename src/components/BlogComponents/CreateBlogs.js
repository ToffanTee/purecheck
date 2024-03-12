import { Fragment, useState, useRef } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useCreateBlogsMutation } from "../../lib/APIs/blogAPI";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Blog.css";

const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const contentRef = useRef();

  const [createBlogs, { data, isError, error, isLoading }] =
    useCreateBlogsMutation();

  console.log(error);
  console.log(data);

  const toolbar = {
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
  };
  const onCreateBlog = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }
    createBlogs({ title, content: contentRef.current.value });
  };

  return (
    <Fragment>
      <div className="container-fluid mt-10">
        <div className="row">
          <div className="col-md-2 col-sm-1 col-12"></div>
          <div className="col-md-8 col-12 col-sm-10">
            For better experience writing your blogs view{" "}
            <a href="/write-article/hints" target="_blank">
              Hints
            </a>
            {/* <header className="App-header">Write Article</header>
            {errorMessage && (
              <div class="alert alert-danger text-center" role="alert">
                {errorMessage}
              </div>
            )} */}
            <div className="mb-3">
              <p className="d-inline preview-text">
                <strong> Article preview </strong>
              </p>

              <button type="submit" onClick={onCreateBlog}>
                Create Blog
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder-check"
                  viewBox="0 0 16 16"
                >
                  <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                  <path d="M15.854 10.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0l-1.5-1.5a.5.5 0 0 1 .707-.708l1.146 1.147 2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>

              {/* <button
                type="submit"
                className="d-inline float-right preview-btn"
                onClick={onShowModal}
              >
                Preview
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-zoom-in"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </button> */}
            </div>
            <div>
              <div className="form-group title-container">
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Title"
                  className="form-control"
                />
              </div>
            </div>
            <textarea
              className="text-output"
              disabled
              ref={contentRef}
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={toolbar}
              //   mention={mention}
              //   hashtag={hashtag}
            />
          </div>
          <div className="col-md-2 col-sm-1 col-12"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateBlogs;
