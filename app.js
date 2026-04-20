const DB_ENDPOINT = "https://script.google.com/macros/s/AKfycbwXIgw0YRLkttCbnpml5AT19wWOSbt3pLV3_W2hxZ0a/dev";
 
//READ
async function readData(table) {
	try {
        const response = await fetch(`${DB_ENDPOINT}?table=${table}`);
        const data = await response.json();
        console.log(data);
	} catch (error) { console.error("Error:", error); }
}
 
//ADD
async function addData(table, dataToAdd) {
	try {
        const response = await fetch(`${DB_ENDPOINT}?table=${table}`, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ action: "add", data: dataToAdd })
        });
        const result = await response.json();
        console.log(result);
	} catch (error) { console.error("Error:", error); }
}
 
//UPDATE
async function updateData(table, dataToSelect, dataToUpdate) {
	try {
        const response = await fetch(`${DB_ENDPOINT}?table=${table}`, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ action: "update",
                data: { select: dataToSelect, update: dataToUpdate } })
        });
        const result = await response.json();
        console.log(result);
	} catch (error) { console.error("Error:", error); }
}
 
//DELETE
async function deleteData(table, dataToSelect) {
	try {
        const response = await fetch(`${DB_ENDPOINT}?table=${table}`, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ action: "delete",
                data: { select: dataToSelect } })
        });
        const result = await response.json();
        console.log(result);
	} catch (error) { console.error("Error:", error); }
}

