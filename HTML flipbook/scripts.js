const url = './media/flipbook1.pdf'; // Update with your file path
let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 0.9, // Increased scale to 0.9 for 10% larger size
    canvas = document.getElementById('pdf-canvas'),
    ctx = canvas.getContext('2d');

// Load the PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
    pdfDoc = pdf;
    renderPage(pageNum);
});

function renderPage(num) {
    if (pageRendering) return;

    pageRendering = true;

    // Start animation: rotate and fade out
    canvas.classList.add('canvas-animate');

    // Render the next page after a short delay
    setTimeout(() => {
        pdfDoc.getPage(num).then(page => {
            // Calculate the new viewport with the updated scale
            const viewport = page.getViewport({ scale });
            
            // Update canvas dimensions to match the scaled PDF content
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
            };

            const renderTask = page.render(renderContext);
            renderTask.promise.then(() => {
                pageRendering = false;

                // Reset animation
                canvas.classList.remove('canvas-animate');

                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });
    }, 300); // Match the CSS transition duration
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

document.getElementById('prev').addEventListener('click', () => {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
});

document.getElementById('next').addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
});
