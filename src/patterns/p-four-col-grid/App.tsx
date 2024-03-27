import windows from '../../assets/windows.png';
import raspberry from '../../assets/raspberry.png';
// import multipass from './assets/multipass.png';
// import lxd from './assets/lxd.png';
import { FC, ReactNode } from 'react';

interface Props {
  sgHeader: ReactNode;
  sgContent: ReactNode;
  sgFooter: ReactNode;
}

const SubGridCol: FC<Props> = ({ sgHeader, sgContent, sgFooter }) => {
  return (
    <div className="p-4-col-grid__col">
      <header className="p-4-col-grid__col-header">
        {sgHeader}
      </header>
      <p className="p-4-col-grid__col-content">{sgContent}</p>
      <footer className="p-4-col-grid__col-footer">
        <hr />
        {sgFooter}
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <div className="demo p-4-col-grid">
        <div className="p-4-col-grid__title">
          <p>MORE FROM CANONICAL</p>
        </div>
        <div className='p-4-col-grid__row'>
          <hr className='p-4-col-grid__row-divider--below-header'/>
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
            sgHeader={<img src={windows} />}
            sgContent="Spin up Ubuntu VMs on Windows, Mac and Linux."
            sgFooter={<a href="#">Learn about Multipass</a>}
          />
          <SubGridCol
            sgHeader={<img src={raspberry} />}
            sgContent="Fast, dense, and secure container and VM management at any scale."
            sgFooter={<a href="#">Learn about LXD</a>}
          />
        </div>
        <div className='p-4-col-grid__row'>
          <hr className='p-4-col-grid__row-divider--below-header'/>
          <SubGridCol
            sgHeader={<img src={windows} />}
            sgContent="Fast, dense, and secure container and VM management at any scale."
            sgFooter={<a href="#">Learn about LXD</a>}
          />
          <SubGridCol
            sgHeader={<img src={raspberry} />}
            sgContent="Spin up Ubuntu VMs on Windows, Mac and Linux."
            sgFooter={<a href="#">Learn about Multipass</a>}
          />
          <SubGridCol
            sgHeader={<img src={windows} />}
            sgContent="Use your Raspberry Pi as a desktop, server or IoT device with Ubuntu."
            sgFooter={<a href="#">Learn about Ubuntu for Raspberry Pi</a>}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
