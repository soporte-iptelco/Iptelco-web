class IPTELCOFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-grid">
          <div class="footer-col">
            <a href="index.html" style="margin-bottom: 8px; display: inline-block; text-decoration: none;">
              <img src="img/logo-main.png" alt="IPTELCO Logo" style="height: 85px; width: auto; object-fit: contain; display: block;">
            </a>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.55; font-weight: 500;">
              <b>Somos tu aliado tecnológico estratégico.</b> Diseñamos e implementamos soluciones integrales en Telefonía IP, Ciberseguridad, Redes, Cloud y Soporte TI empresarial.
            </p>
            <div class="address-card" style="margin-top: 6px;">
              📍 <b>Oficina Principal:</b><br>
              Calle 26 # 69 – 76, Edificio Elemento Torre 3, Oficina 1501 — Bogotá, Colombia.
            </div>
          </div>

          <div class="footer-col">
            <h4>Atención & Soporte</h4>
            <a href="https://wa.me/573178737171" target="_blank" class="contact-item">
              <div class="contact-icon-box">💬</div>
              <div><span>WhatsApp Directo:</span><b>+57 317 873 7171</b></div>
            </a>
            <a href="mailto:info@iptelco.com.co" class="contact-item">
              <div class="contact-icon-box">✉️</div>
              <div><span>Correo Comercial:</span><b>info@iptelco.com.co</b></div>
            </a>
            <a href="soporte.html" class="contact-item">
              <div class="contact-icon-box red-box">🛠️</div>
              <div><span>Mesa de Ayuda B2B:</span><b>Radicar Ticket de Soporte</b></div>
            </a>
          </div>

          <div class="footer-col">
            <h4>Nuestras Soluciones</h4>
            <ul class="footer-links">
              <li><a href="telefonia-ip.html">📞 Telefonía IP & Centrales</a></li>
              <li><a href="ciberseguridad.html">🛡️ Firewalls & Seguridad</a></li>
              <li><a href="soluciones-cloud.html">☁️ Microsoft 365 & Azure</a></li>
              <li><a href="cctv-biometria.html">📹 CCTV & Control de Acceso</a></li>
              <li><a href="outsourcing-ti.html">💻 Soporte TI & Hardware</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div>© 2026 IPTELCO S.A.S — Todos los derechos reservados.</div>
          <div>Bogotá, Colombia</div>
        </div>
      </footer>

      <a href="https://wa.me/573178737171" target="_blank" class="whatsapp-widget">
        <div class="wa-avatar-box">
          <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="Asesora IPTELCO">
          <div class="wa-icon-badge">
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </div>
        </div>
        <div class="wa-banner"><span>Recibe tu <strong>COTIZACIÓN</strong><br>en WhatsApp</span></div>
      </a>
    `;
  }
}

customElements.define('iptelco-footer', IPTELCOFooter);
