/* eslint-disable jsx-a11y/img-redundant-alt */
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <aside className="w-1/5 bg-white p-4">
          <div className="flex items-center mb-8  ms-1">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a4/de/c1/a4dec169-1ec7-c761-9ea2-f69a67e3f5b1/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png"
              alt="Logo"
              className="mr-2 w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-blue-600">AI CV</span>
          </div>
          <nav>
            <div className="flex flex-col h-full">
              <ul className="flex-1">
                <li className="mb-10 ms-4 flex items-center text-gray-600">
                  <i className="fas fa-th-large mr-2"></i>
                  <span>Search CV</span>
                </li>
                <li className="mb-10 ms-4 flex items-center text-blue-600">
                  <i className="fas fa-layer-group mr-2"></i>
                  <span>Shortlisted CV</span>
                </li>
                <li className="mb-10 ms-4 flex items-center text-gray-600">
                  <i className="fas fa-history mr-2"></i>
                  <span>Transaction History</span>
                </li>
                <li className="mb-10 ms-4 flex items-center text-gray-600">
                  <i className="fas fa-search mr-2"></i>
                  <span>Search History</span>
                </li>
                <li className="mb-10 ms-4 flex items-center text-gray-600">
                  <i className="fas fa-user mr-2"></i>
                  <span>Profile</span>
                </li>
              </ul>
              <ul>
                <li className="absolute bottom-10 w-full flex mb-10 ms-4 items-center text-gray-600">
                  <i className="fas fa-cog mr-2"></i>
                  <span>Settings</span>
                </li>
                <li className="absolute bottom-0 flex mb-10 ms-4  items-center text-gray-600">
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  <span>Sign Out</span>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-8 bg-gray-50">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Shortlisted CV's</h1>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-800">Hi, Username</span>
                <span className="text-blue-600">Credits Left: 300</span>
              </div>
              <img
                src="https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?t=st=1737137033~exp=1737140633~hmac=7d5207ee9cc84da0f667d41efbf5477fc67333bb0dcd3324fbf1f4a4ab0c0b99&w=360"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-4 object-contain"
              />
            </div>
          </header>
          <section>
            {Array(6)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-sm"
                >
                  <input type="checkbox" className="mr-4" />
                  <img
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1737136870~exp=1737140470~hmac=2e55541bc71129c3126d434f2580aeefbc1d563a62b74ce581c2d91f4aec2fab&w=740"
                    alt="Profile Picture"
                    className="rounded-full mr-4 w-12 h-12 object-contain"
                  />
                  <div className="flex-1">
                    <h2 className="font-bold">John Doe</h2>
                    <p className="text-gray-600">UI/UX Developer</p>
                    <p className="text-gray-500">
                      From France, Paris. I have rich experience in web design,
                      also I am good at WordPress. I love to talk with you about
                      our unique.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col space-y-2">
                      <span className="mr-4 text-blue-600">Skills</span>
                      <div className="flex mr-4">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <i
                              key={i}
                              className="fas fa-circle text-blue-600 mr-1"
                            ></i>
                          ))}
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                      <i className="fas fa-download mr-2"></i>
                      Download for{" "}
                      {index === 2 ? "50" : index === 5 ? "15" : "30"} credits
                    </button>
                  </div>
                </div>
              ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
