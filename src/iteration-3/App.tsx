import windows from './assets/windows.png';
import raspberry from './assets/raspberry.png';
import multipass from './assets/multipass.png';
import lxd from './assets/lxd.png';

function App() {
  return (
    <div className="app">
      <div className="demo p-equal-h-grid">
        <div className="p-equal-h-grid__title">
          <p>MORE FROM CANONICAL</p>
        </div>
        <div className='p-equal-h-grid__container'>
          <div className="p-equal-h-grid__header-1">
            <img src={windows} />
          </div>
          <div className="p-equal-h-grid__header-2">
            <img src={raspberry} />
          </div>
          <div className="p-equal-h-grid__header-3">
            <img src={multipass} />
          </div>
          <div className="p-equal-h-grid__header-4">
            <img src={lxd} />
          </div>
          <hr className='p-equal-h-grid__divider' />
          <p className="p-equal-h-grid__content-1">
            Use the Ubuntu terminal and run Linux applications on Windows. Use the Ubuntu terminal
            and run Linux applications on Windows.
          </p>
          <p className="p-equal-h-grid__content-2">
            Use your Raspberry Pi as a desktop, server or IoT device with Ubuntu.
          </p>
          <p className="p-equal-h-grid__content-3">
            Spin up Ubuntu VMs on Windows, Mac and Linux.
          </p>
          <p className="p-equal-h-grid__content-4">
            Fast, dense, and secure container and VM management at any scale.
          </p>
          <div className="p-equal-h-grid__footer-1">
            <hr />
            <a href="#">Learn about Ubuntu for WSL</a>
          </div>
          <div className="p-equal-h-grid__footer-2">
            <hr />
            <a href="#">Learn about Ubuntu for Raspberry Pi</a>
          </div>
          <div className="p-equal-h-grid__footer-3">
            <hr />
            <a href="#">Learn about Multipass</a>
          </div>
          <div className="p-equal-h-grid__footer-4">
            <hr />
            <a href="#">Learn about LXD</a>
          </div>
        </div>
        <div className='p-equal-h-grid__container'>
          <div className="p-equal-h-grid__header-1">
            <img src={windows} />
          </div>
          <div className="p-equal-h-grid__header-2">
            <img src={raspberry} />
          </div>
          <div className="p-equal-h-grid__header-3">
            <img src={multipass} />
          </div>
          <div className="p-equal-h-grid__header-4">
            <img src={lxd} />
          </div>
          <hr className='p-equal-h-grid__divider' />
          <p className="p-equal-h-grid__content-1">
            Use the Ubuntu terminal and run Linux applications on Windows. Use the Ubuntu terminal
            and run Linux applications on Windows.
          </p>
          <p className="p-equal-h-grid__content-2">
            Use your Raspberry Pi as a desktop, server or IoT device with Ubuntu.
          </p>
          <p className="p-equal-h-grid__content-3">
            Spin up Ubuntu VMs on Windows, Mac and Linux.
          </p>
          <p className="p-equal-h-grid__content-4">
            Fast, dense, and secure container and VM management at any scale.
          </p>
          <div className="p-equal-h-grid__footer-1">
            <hr />
            <a href="#">Learn about Ubuntu for WSL</a>
          </div>
          <div className="p-equal-h-grid__footer-2">
            <hr />
            <a href="#">Learn about Ubuntu for Raspberry Pi</a>
          </div>
          <div className="p-equal-h-grid__footer-3">
            <hr />
            <a href="#">Learn about Multipass</a>
          </div>
          <div className="p-equal-h-grid__footer-4">
            <hr />
            <a href="#">Learn about LXD</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
