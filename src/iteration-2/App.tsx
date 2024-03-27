import windows from './assets/windows.png';
import raspberry from './assets/raspberry.png';
import multipass from './assets/multipass.png';
import lxd from './assets/lxd.png';
import { FC, ReactNode } from 'react';

interface Props {
  sgHeader: ReactNode;
  sgContent: ReactNode;
  sgFooter: ReactNode;
}

const SubGridCol: FC<Props> = ({ sgHeader, sgContent, sgFooter }) => {
  return (
    <div className="p-equal-h-grid__col">
      <header className="p-equal-h-grid__col-header">{sgHeader}</header>
      <p className='p-equal-h-grid__col-content'>{sgContent}</p>
      {/* <hr /> */}
      <footer className='p-equal-h-grid__col-footer'>
        <hr className='p-equal-h-grid__divider-full'/>
        {sgFooter}
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <div className="demo p-equal-h-grid">
        <div className='p-equal-h-grid__title'>
          <p>MORE FROM CANONICAL</p>
        </div>
        <SubGridCol
          sgHeader={<img src={windows} />}
          sgContent="Use the Ubuntu terminal and run Linux applications on Windows. Use the Ubuntu terminal
          and run Linux applications on Windows."
          sgFooter={<a href="#">Learn about Ubuntu for WSL</a>}
        />
        <SubGridCol
          sgHeader={<img src={raspberry} />}
          sgContent="Use your Raspberry Pi as a desktop, server or IoT device with Ubuntu."
          sgFooter={<a href="#">Learn about Ubuntu for Raspberry Pi</a>}
        />
        <SubGridCol
          sgHeader={<img src={multipass} />}
          sgContent="Spin up Ubuntu VMs on Windows, Mac and Linux."
          sgFooter={<a href="#">Learn about Multipass</a>}
        />
        <SubGridCol
          sgHeader={<img src={lxd} />}
          sgContent="Fast, dense, and secure container and VM management at any scale."
          sgFooter={<a href="#">Learn about LXD</a>}
        />
        <SubGridCol
          sgHeader={<img src={lxd} />}
          sgContent="Fast, dense, and secure container and VM management at any scale."
          sgFooter={<a href="#">Learn about LXD</a>}
        />
        <SubGridCol
          sgHeader={<img src={lxd} />}
          sgContent="Fast, dense, and secure container and VM management at any scale."
          sgFooter={<a href="#">Learn about LXD</a>}
        />
      </div>
    </div>
  );
}

export default App;
