import React from "react";
import CircularProgressbar from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://uploadalface.s3.amazonaws.com/75e132684b0fb72396af14ec28b859a1-pexels-photo-459654.jpeg" />
        <div>
          <strong>profile.png</strong>
          <span>
            64kb<button onClick={() => {}}>Excluir</button>
          </span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: "#7159c1" }
          }}
          strokeWidth={10}
          percentage={60}
        />
        /
        <a
          href="https://uploadalface.s3.amazonaws.com/75e132684b0fb72396af14ec28b859a1-pexels-photo-459654.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>
      </div>
    </li>
  </Container>
);
export default FileList;
/*35:15 timeline video */
