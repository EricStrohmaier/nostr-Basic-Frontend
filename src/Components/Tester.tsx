import React, { useState, useEffect } from "react";

const Basictest = () => {
  const [nsecResponse, setNsecResponse] = useState(null); // Initialize with null or an initial value
  const npub =
    "npub1y8yk2myx0l46ccq34eanww8eyp57xar4nqg3gexptxcjzm30e9ssl9pw77";

  useEffect(() => {
    // Use an async function to fetch the data and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nostr-api.vercel.app/api/key/from_npub?npub=${npub}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNsecResponse(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Call the async function when the component mounts
  }, [npub]); // Include npub in the dependency array to re-fetch when it changes

  return (
    <div>
      <div>hello Nostromo</div>
      <div>
        <div>fetchData</div>
        <div>postData</div>
      </div>
      {nsecResponse && (
        <div>
          {/* Display the data when it's available */}
          <pre>
            <code>{JSON.stringify(nsecResponse, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default Basictest;
