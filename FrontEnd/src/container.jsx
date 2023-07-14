import React, { useEffect, useState } from 'react';

const ContainerList = () => {
  const [containers, setContainers] = useState([]);
  const subscriptionId = '94bdf75f-0db0-45e0-bb43-ff113d14ea1f';
  const storageAccountName = 'filesrepostorageaccount';
  const resourceGroupName = 'storagerepo';
  const apiVersion = '2022-09-01';
  
  useEffect(() => {
    const fetchContainers = async () => {
      const url = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}/providers/Microsoft.Storage/storageAccounts/${storageAccountName}/blobServices/default/containers?api-version=${apiVersion}`;

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg5MzI3MTAyLCJuYmYiOjE2ODkzMjcxMDIsImV4cCI6MTY4OTMzMTA5MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQWlkWHBVS0o1Zmt0MzhuOC84OUcvWCt6ZFprL216TUlsVDVpa2RkRCtQRWdaZWkyQTRKd09iYktkcnhBb3hBS1kiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU5LjIzMy4yNDkiLCJuYW1lIjoibG91YXlraHJvdWYiLCJvaWQiOiI3ZWIzNjhjZC0wM2JiLTQ1ZmYtYjRiOC1lMjE1NGFkZGI2ZjkiLCJwdWlkIjoiMTAwMzIwMDA0RkRBMTYzMiIsInJoIjoiMC5BUjhBVFdiVzI3bE82MGFaMkZ4RHVoVThZVVpJZjNrQXV0ZFB1a1Bhd2ZqMk1CTWZBRzguIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiVnMxbFRQLU16QWRLMmxtTVlMa3FjRGFFX1g3ZFREb0Jkem1UM3VJV0VHSSIsInRpZCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsInVuaXF1ZV9uYW1lIjoibG91YXlraHJvdWZAaW5zYXQudS1jYXJ0aGFnZS50biIsInVwbiI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1dGkiOiJDZm1zZDlyM1NFaWk1NTh6RGxJbkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfdGNkdCI6MTUwNDAxMjQ1Nn0.B1guIe2JHYrC_1QkAURq_OtU9_nRPZpmIYGOCnTXb3_eOXyvsUNDs_ED2JlAmp4Kh9f4zl_LLGrzH2tWbnmNytpDSYjWrQ0yAwq7dDMTGu43jtq_sUOY7ICgJtj2x53uYgKiqS5waaeBDDriGlMsx6zhdtSvtgg6lzS5WCXJ56d8-6gS1hvaOS19WrZe0hZiK27GzdpL2TJ2pmHEdLphYPZa0LNtlpkv3hLNyBQCVNBSGDmwBUGX7LuyZV_Wl_aupZ9m72cOHS925vrP2tHhfjXDH-JNI0BzYI-PKHfCgihB6vla5hs4OAdJimqfuJrzPakD4YOo4ly6drF3apJXng',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.value && data.value.length > 0) {
          setContainers(data.value);
        }
      } else {
        // Handle error response
        console.error('Failed to fetch containers:', response.status);
      }
    };

    fetchContainers();
  }, []);

  return (
    <div>
      <h2>Containers</h2>
      {containers.length > 0 ? (
        <ul>
          {containers.map((container) => (
            <li key={container.name}>{container.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading containers...</p>
      )}
    </div>
  );
};

export default ContainerList;
