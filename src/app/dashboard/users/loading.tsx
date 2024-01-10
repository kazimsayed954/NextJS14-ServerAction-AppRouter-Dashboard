const UserLoading = () => {
  return (
    <table className="w-full">
      <tbody className="w-full">
        {[1, 2, 3, 4, 5]?.map((index) => (
          <tr key={index} className="animate-pulse">
            <td colSpan={6} className="bg-white py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <div className="w-36 h-5 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-20 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserLoading;
