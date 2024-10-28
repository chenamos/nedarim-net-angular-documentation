'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">material-dashboard-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link" >AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminLayoutModule-5e716c84e2bbe7e99d38fb0bef7a6049a0364429288f0656604d2171363d052b1f7c698ef88943b9530c819ba79804dd3bdc4afa5ebcc0d66657728127536cbe"' : 'data-bs-target="#xs-components-links-module-AdminLayoutModule-5e716c84e2bbe7e99d38fb0bef7a6049a0364429288f0656604d2171363d052b1f7c698ef88943b9530c819ba79804dd3bdc4afa5ebcc0d66657728127536cbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-5e716c84e2bbe7e99d38fb0bef7a6049a0364429288f0656604d2171363d052b1f7c698ef88943b9530c819ba79804dd3bdc4afa5ebcc0d66657728127536cbe"' :
                                            'id="xs-components-links-module-AdminLayoutModule-5e716c84e2bbe7e99d38fb0bef7a6049a0364429288f0656604d2171363d052b1f7c698ef88943b9530c819ba79804dd3bdc4afa5ebcc0d66657728127536cbe"' }>
                                            <li class="link">
                                                <a href="components/AddDonationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDonationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddExpenditureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddExpenditureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMemberFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMemberFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonatorReportSelModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonatorReportSelModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonatorsManagingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonatorsManagingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonatorsReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonatorsReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpendituresDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpendituresDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemberAccountPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberAccountPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemberDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PledgePaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PledgePaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypographyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpgradeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpgradeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ZmanimComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZmanimComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-02f51b5133a706b463945732c8a4bfd687f870fecf69c4368cc7580b768a647f6cc5f5b5980ed0c9b37ad6f307facf461e45701d59c4e49fb4e153d27e2dfe09"' : 'data-bs-target="#xs-components-links-module-AppModule-02f51b5133a706b463945732c8a4bfd687f870fecf69c4368cc7580b768a647f6cc5f5b5980ed0c9b37ad6f307facf461e45701d59c4e49fb4e153d27e2dfe09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-02f51b5133a706b463945732c8a4bfd687f870fecf69c4368cc7580b768a647f6cc5f5b5980ed0c9b37ad6f307facf461e45701d59c4e49fb4e153d27e2dfe09"' :
                                            'id="xs-components-links-module-AppModule-02f51b5133a706b463945732c8a4bfd687f870fecf69c4368cc7580b768a647f6cc5f5b5980ed0c9b37ad6f307facf461e45701d59c4e49fb4e153d27e2dfe09"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditPledgePaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditPledgePaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-f6d022bc60ca8c5130b02c0b054e178278a822bc2d0b8aedbee3f5fc67eaadcf28cdd408da36df2ff31a8adb8751af1f01a3c6a3d3ea4788553ab8057192abba"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-f6d022bc60ca8c5130b02c0b054e178278a822bc2d0b8aedbee3f5fc67eaadcf28cdd408da36df2ff31a8adb8751af1f01a3c6a3d3ea4788553ab8057192abba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-f6d022bc60ca8c5130b02c0b054e178278a822bc2d0b8aedbee3f5fc67eaadcf28cdd408da36df2ff31a8adb8751af1f01a3c6a3d3ea4788553ab8057192abba"' :
                                            'id="xs-components-links-module-ComponentsModule-f6d022bc60ca8c5130b02c0b054e178278a822bc2d0b8aedbee3f5fc67eaadcf28cdd408da36df2ff31a8adb8751af1f01a3c6a3d3ea4788553ab8057192abba"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link" >PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaypalButtonComponent.html" data-type="entity-link" >PaypalButtonComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppUser.html" data-type="entity-link" >AppUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/MaterialDashboardAngularPage.html" data-type="entity-link" >MaterialDashboardAngularPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactUsService.html" data-type="entity-link" >ContactUsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvoiceService.html" data-type="entity-link" >InvoiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvoiceService-1.html" data-type="entity-link" >InvoiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemberService.html" data-type="entity-link" >MemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaypalService.html" data-type="entity-link" >PaypalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link" >ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZmanimService.html" data-type="entity-link" >ZmanimService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/JwtInterceptorService.html" data-type="entity-link" >JwtInterceptorService</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/RedirectInterceptor.html" data-type="entity-link" >RedirectInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Donation.html" data-type="entity-link" >Donation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DonationResponse.html" data-type="entity-link" >DonationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceItem.html" data-type="entity-link" >InvoiceItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceRequest.html" data-type="entity-link" >InvoiceRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceResponse.html" data-type="entity-link" >InvoiceResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MemberResponse.html" data-type="entity-link" >MemberResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentDetail.html" data-type="entity-link" >PaymentDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link" >RouteInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/FilterPipe.html" data-type="entity-link" >FilterPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});