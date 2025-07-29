// Configuración de Marked
    marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: function(code, lang) {
            return code;
        }
    });
    
    // Elementos DOM
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const toolbarButtons = document.querySelectorAll('.toolbar button');
    
    // Función para actualizar la vista previa
    function updatePreview() {
        const markdownText = editor.value;
        preview.innerHTML = marked.parse(markdownText);
    }
    
    // Evento para actualizar en tiempo real
    editor.addEventListener('input', updatePreview);
    
    // Funciones para la barra de herramientas
    function wrapSelection(prefix, suffix = '') {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);
        const before = editor.value.substring(0, start);
        const after = editor.value.substring(end);
        
        editor.value = before + prefix + selectedText + suffix + after;
        editor.selectionStart = start + prefix.length;
        editor.selectionEnd = end + prefix.length;
        editor.focus();
        updatePreview();
    }
    
    // Asignar eventos a los botones de la barra de herramientas
    document.getElementById('bold').addEventListener('click', () => wrapSelection('**', '**'));
    document.getElementById('italic').addEventListener('click', () => wrapSelection('*', '*'));
    document.getElementById('heading1').addEventListener('click', () => wrapSelection('# ', ''));
    document.getElementById('heading2').addEventListener('click', () => wrapSelection('## ', ''));
    document.getElementById('link').addEventListener('click', () => wrapSelection('[', '](https://)'));
    document.getElementById('image').addEventListener('click', () => wrapSelection('![', '](https://)'));
    document.getElementById('code').addEventListener('click', () => wrapSelection('```\n', '\n```'));
    document.getElementById('list').addEventListener('click', () => wrapSelection('- ', ''));
    document.getElementById('numbered-list').addEventListener('click', () => wrapSelection('1. ', ''));
    document.getElementById('quote').addEventListener('click', () => wrapSelection('> ', ''));
    document.getElementById('clear').addEventListener('click', () => {
        editor.value = '';
        updatePreview();
    });
    
    // Inicializar vista previa
    updatePreview();